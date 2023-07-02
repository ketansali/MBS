import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form,Spin } from "antd";
import Input from "@iso/components/uielements/input";
import {Textarea} from '@iso/components/uielements/input';
import {
  GetAllClientAlerts
} from "./actions";

import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import { AddItemButtonWrapper,ActionWrapper } from "../../../components/uielements/DataTableStyle/DataTable.Style";
import {COMMON} from '../../Constant/Index'
const Alert = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
  const [clientAlerts, setClientAlerts] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const handleModal = () => {}
    const getData = () => {
        setLoading(true);
        GetAllClientAlerts(COMMON.getTableParams(tableParams)).then((res) => {
            setClientAlerts(res?.responseData);
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: res.responseData.totalRecords,
            },
          });
          setLoading(false);
        }).catch(()=>{
          setLoading(false)
        });
      };
      useEffect(() => {
        getData();
        // eslint-disable-next-line
      }, [JSON.stringify(tableParams)]);
      const handleDelete = (id) => {
        // Swal().then((willDelete) => {
        //   if (willDelete) {
        //     DeleteDesignation(id).then(() => {
        //       getData();
        //     });
        //   }
        // });
      };
      const handleUpdate = (record) => {
        // form.setFieldsValue({
        //   id: record.id,
        //   name: record.name,
        //   description: record.description,
        // });
        // setModalActive(!modalActive);
      };
      const handleSearch = (e) => {
        GetAllClientAlerts(COMMON.getTableParams(e)).then((res) => {
          setClientAlerts(res?.responseData);
          setLoading(false);
        });
      };
      const columns = [
        {
            title: 'Actions',
            key: 'action',
            className: 'noWrapCell',
            width:"15%",
            render: (text, record) => {
              return (
                <ActionWrapper>
                  <DeleteCell handleDelete={() => handleDelete(record.id)} />
                  <EditCell handleEdit={() => handleUpdate(record)} />
                </ActionWrapper>
              );
            },
          },
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
          sorter: true,
        },
        {
          title: "Alert Status",
          dataIndex: "alertStatus",
          key: "alertStatus",
          sorter: true,
        },
        {
          title: "Client",
          dataIndex: "clientId",
          key: "clientId",
          sorter: true,
        },
        {
          title: "Client",
          dataIndex: "clientId",
          key: "clientId",
          sorter: true,
        },
        {
          title: "Staff",
          dataIndex: "alertBy",
          key: "alertBy",
          sorter: true,
        },
        {
          title: "Date",
          dataIndex: "alertDate",
          key: "alertDate",
          sorter: true,
        },
        {
          title: "Type",
          dataIndex: "type",
          key: "type",
          sorter: true,
        },
        {
          title: "Status",
          dataIndex: "isActive",
          key: "isActive",
          sorter: true,
        },
        {
          title: "Complated",
          dataIndex: "Complated",
          key: "Complated",
          sorter: true,
        },
        {
          title: "Complated By",
          dataIndex: "complatedBy",
          key: "complatedBy",
          sorter: true,
        },
        {
          title: "Complated Date",
          dataIndex: "complatedDate",
          key: "complatedDate",
          sorter: true,
        },
        
      ];
      const handlePage = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
    
        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
          setClientAlerts([]);
        }
      };
  return (
    <LayoutContentWrapper>
    <AddItemButtonWrapper>
      <div></div>
      <ActionBtn type="primary" onClick={handleModal}>
        ADD CLIENT ALERT
      </ActionBtn>
    </AddItemButtonWrapper>

    <Box>
      <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
        {/* {modal()} */}
        {
          <Spin spinning={loading}>
            {
              clientAlerts && (
                <DataTable
                  columns={columns}
                  data={clientAlerts.data}
                  title="CLIENT ALERT"
                  handleSearch={handleSearch}
                  handlePage={handlePage}
                  pagination={tableParams.pagination}
                  rowKey="id"
                  header={true}
                />
              )
            }
          </Spin>
        }
      </ContentHolder>
    </Box>
  </LayoutContentWrapper>
  )
}

export default Alert