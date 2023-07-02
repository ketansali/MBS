import React, { useEffect, useState } from "react";
import { Title, Filters, Header, HeaderSecondary } from "./ViewClients.style";
import SearchInput from "@iso/components/uielements/InputElement/SearchInput/SearchInput";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Layout } from "antd";
import { useHistory, useRouteMatch } from "react-router";
import DataTable from "../../DataTable/DataTable";
import { Spin, Form,Radio } from "antd";
import { COMMON } from "../../Constant/Index";
import { DeleteClient, GetAllClients } from "../actions";
import Swal from "@iso/components/UI/Swal/Swal";
import { ActionWrapper } from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import Modal from "@iso/components/UI/Modal/Modal";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import Box from "@iso/components/utility/box";
import { FileAddFilled, InfoCircleFilled  } from "@ant-design/icons";
import Datepicker from "@iso/components/uielements/datePicker";
import { Textarea } from "@iso/components/uielements/input";
import Input from "@iso/components/uielements/input";
import moment from "moment";
import '../index.css'
import { GetAllClientAlertType } from "../../Masters/ClientAlertType/actions";
const Option = SelectOption;
const ViewClients = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);
  const [clientsDDL, setClientsDDL] = useState([]);
  const [clientsAlertType, setClientsAlertType] = useState([]);
  const [notesmodalActive, setNotesModalActive] = useState(false);
  const [alertmodalActive, setAlertModalActive] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const getData = () => {
    setLoading(true);
    GetAllClients(COMMON.getTableParams(tableParams))
      .then((res) => {
        setClients(res?.responseData);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: res.responseData.totalRecords,
          },
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [JSON.stringify(tableParams)]);
  const handlePage = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setClients([]);
    }
  };
  const handleSearch = (e) => {
    GetAllClients(COMMON.getTableParams(e)).then((res) => {
      setClients(res?.responseData);
      setLoading(false);
    });
  };
  const handleDelete = (id) => {
    Swal().then((willDelete) => {
      if (willDelete) {
        DeleteClient(id).then(() => {
          getData();
        });
      }
    });
  };
  const getAllClients = (value) => {
    GetAllClients({
      pageNo: 1,
      searchValue: value,
      length: 0,
      sortColumn: "",
      sortOrder: "",
    })
      .then((res) => {
        setClientsDDL(res?.responseData.data);
      })
      .catch(() => {});
  };
  const getClientAlertType = (value) => {
    GetAllClientAlertType({
      pageNo: -1,
      searchValue: value,
      length: 0,
      sortColumn: "",
      sortOrder: "",
    })
      .then((res) => {
        setClientsAlertType(res?.responseData.data);
      })
      .catch(() => {});
  };
  const columns = [
    {
      title: "Actions",
      key: "action",
      className: "noWrapCell",
      width: "15%",
      render: (text, record) => {
        return (
          <ActionWrapper>
            <DeleteCell
              title="Delete Client"
              handleDelete={() => handleDelete(record.id)}
            />
            <EditCell title="Edit Client" />
            <FileAddFilled
              title="Add Client Notes"
              onClick={()=>handleClientNotesModal(record)}
            />
            <InfoCircleFilled title="Add Client Alert" className="iconMLCls"
              onClick={()=>handleClientAlertModal(record)}/>
          </ActionWrapper>
        );
      },
    },
    {
      title: "Client",
      dataIndex: "firstName",
      key: "firstName",
      sorter: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
    },
  ];
  const handleClientNotesModal = (record) => {
    // form.resetFields();
    // if (!modalActive) {
    //   setState([]);
    //   form.setFieldsValue({ category: "", id: "", countryMasterId: "", stateMasterId: "", city: "" });
    // }
    getAllClients();
    
    form.setFieldsValue({clientId:`${record.firstName} ${record.lastName} (${record.email})`, name:COMMON.getLoggedInUser().fullName, date:moment() })
    setNotesModalActive(!notesmodalActive);
  };
  const handleClientAlertModal = (record) => {
    // form.resetFields();
    // if (!modalActive) {
    //   setState([]);
    //   form.setFieldsValue({ category: "", id: "", countryMasterId: "", stateMasterId: "", city: "" });
    // }
    getAllClients();
    getClientAlertType();
    form.setFieldsValue({clientId:`${record.firstName} ${record.lastName} (${record.email})`, date:moment() })
    setAlertModalActive(!alertmodalActive);
  };
  const clientsNotesModal = () => (
    <Modal
      open={notesmodalActive}
      onClose={handleClientNotesModal}
      title="Add Client Note"
      okText="Add"
      // onOk={handleSubmit}
      onCancel={handleClientNotesModal}
      bodyStyle={{ borderRadius: "50px" }}
    >
      <Form form={form} name="clientNotes" layout="vertical" scrollToFirstError>
        <Form.Item
          name="clientId"
          label="Client"
          rules={[
            {
              required: true,
              message: "Select Client!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select Client"
            onSearch={getAllClients}
            allowClear
            filterOption={false}
          >
            {clientsDDL &&
              clientsDDL.map((e) => (
                <Option value={e.id} key={e.id}>
                  {e.firstName} {e.lastName} ({e.email})
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Select Today Date!",
            },
          ]}
        >
          <Datepicker placeholder="date" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          placeholder="Enter Name"
          rules={[
            {
              required: true,
              message: "Enter Name!",
            },
          ]}
        >
          <Input placeholder="Enter Name" disabled/>
        </Form.Item>
        <Form.Item
          name="Note Details"
          label="Note"
          placeholder="Enter Note Details"
          rules={[
            {
              required: true,
              message: "Enter Note Details!",
            },
          ]}
          
        >
          <Textarea placeholder="Enter Note Details"  />
        </Form.Item>
      </Form>
    </Modal>
  );
  const clientsAlertModal = () => (
    <Modal
      open={alertmodalActive}
      onClose={handleClientAlertModal}
      title="Add Client Alert"
      okText="Add"
      // onOk={handleSubmit}
      onCancel={handleClientAlertModal}
      bodyStyle={{ borderRadius: "50px" }}
    >
      <Form form={form} name="clientAlert" layout="vertical" scrollToFirstError>
        <Form.Item
          name="clientId"
          label="Client"
          rules={[
            {
              required: true,
              message: "Select Client!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select Client"
            onSearch={getAllClients}
            allowClear
            filterOption={false}
          >
            {clientsDDL &&
              clientsDDL.map((e) => (
                <Option value={e.id} key={e.id}>
                  {e.firstName} {e.lastName} ({e.email})
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="alertById"
          label="Alert by"
          rules={[
            {
              required: true,
              message: "Select Alert By!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select Alert By"
            onSearch={getAllClients}
            allowClear
            filterOption={false}
          >
            {clientsDDL &&
              clientsDDL.map((e) => (
                <Option value={e.id} key={e.id}>
                  {e.firstName} {e.lastName} ({e.email})
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="alertTypeId"
          label="Alert Type"
          rules={[
            {
              required: true,
              message: "Select Alert Type!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select Alert Type"
            onSearch={getClientAlertType}
            allowClear
            filterOption={false}
          >
            {clientsAlertType &&
              clientsAlertType.map((e) => (
                <Option value={e.id} key={e.id}>
                  {e.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Select Today Date!",
            },
          ]}
        >
          <Datepicker placeholder="date" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
              label="isActive"
            name="status"
            rules={[
              {
                required: true,
                message: "Please Select Status!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>PENDING</Radio>
              <Radio value={false}>COMPLETE</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
              label="Alert Status"
            name="alertIsStatus"
            rules={[
              {
                required: true,
                message: "Please Select Alert Status!",
              },
            ]}

            labelCol={{ span: 10 }} wrapperCol={{ span: 10 }}
          >
            <Radio.Group>
              <Radio value={true}>ACTIVE</Radio>
              <Radio value={false}>INACTIVE</Radio>
            </Radio.Group>
          </Form.Item>
        <Form.Item
          name="Alert Details"
          label="Note"
          placeholder="Enter Alert Details"
          rules={[
            {
              required: true,
              message: "Enter Alert Details!",
            },
          ]}
          
        >
          <Textarea placeholder="Enter Alert Details"  />
        </Form.Item>
      </Form>
    </Modal>
  );
  return (
    <Layout style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header>
        <Title>Clients</Title>
        <div>
          <ActionBtn
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => history.push(`${match.url}/new`)}
          >
            ADD NEW CLIENT
          </ActionBtn>
          <ActionBtn
            type="primary"
            onClick={() => history.push(`${match.url}/membership`)}
          >
            ADD MEMBERSHIP
          </ActionBtn>
        </div>
      </Header>
      <HeaderSecondary>
        <SearchInput placeholder="Search..." onChange={handleSearch} />
        <Filters>
          <div style={{ marginRight: "10px" }}>
            <Select
              placeholder="Select Client Type"
              // onChange={this.handleChange}
              style={{ width: "160px" }}
            >
              <Option value="AllCLIENTS">All CLIENTS</Option>
              <Option value="CURRENTCLIENTS">CURRENT CLIENTS</Option>
              <Option value="ARCHIVEDCLIENTS">ARCHIVED CLIENTS</Option>
              <Option value="INACTIVECLIENTS">INACTIVE CLIENTS</Option>
              <Option value="RECENTLYVIEWED">RECENTLY VIEWED</Option>
            </Select>
          </div>
          <Select
            placeholder="Select LOCATION"
            // onChange={this.handleChange}
            style={{ width: "150px" }}
          >
            <Option value="ALL LOCATION">ALL LOCATION</Option>
            <Option value="ANGELES">LOS ANGELES</Option>
            <Option value="TEXAS">TEXAS</Option>
          </Select>
        </Filters>
      </HeaderSecondary>
      <Box style={{ border: "none" }}>
        {clientsNotesModal()}
        {clientsAlertModal()}
        <Spin spinning={loading}>
          {clients && (
            <DataTable
              columns={columns}
              data={clients.data}
              title="Clients"
              // handleSearch={handleSearch}
              header={false}
              handlePage={handlePage}
              pagination={tableParams.pagination}
              rowKey="id"
            />
          )}
        </Spin>
      </Box>
    </Layout>
  );
};

export default ViewClients;
