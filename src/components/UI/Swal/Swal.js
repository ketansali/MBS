import swal from "sweetalert";
export default () =>
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete?",
    icon: "warning",
    dangerMode: true,
    buttons: true,
  });
