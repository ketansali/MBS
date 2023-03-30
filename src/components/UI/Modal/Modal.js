// import React from "react";
// import Form from "../../uielements/form";
// import isoModal from "../../Feedback/Modal";
// import { InfoFormWrapper } from "./CardModal.style";
// import Modals from "./Modal.style";
// import WithDirection from "@iso/lib/helpers/rtl";
// const WDModal = Modals(isoModal);
// const Modal = WithDirection(WDModal);

// export default function ({
//   modalType,
//   editView,
//   handleCancel,
//   submitCard,
//   children,
//   title,
// }) {
//   const saveButton = () => {
//     submitCard();
//   };

//   return (
//     <Modal
//       title={modalType === "edit" ? `Edit ${title}` : `Add ${title}`}
//       open={editView}
//       onCancel={handleCancel}
//       cancelText="Cancel"
//       onOk={saveButton}
//       okText={modalType === "edit" ? "Edit Card" : "Add Card"}
//     >
//       <InfoFormWrapper>
//         <Form className="isoCardInfoForm">{children}</Form>
//       </InfoFormWrapper>
//     </Modal>
//   );
// }

import { Modal } from "antd";

export default Modal;
