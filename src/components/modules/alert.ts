import swal from "sweetalert";

export const alertSuccess = () => {
    swal({
        title: "success",
        text: "Data sukses di simpan",
        icon: "success",
        button: false,
        timer: 1500
      });
};

export const alertError = () => {
    swal({
        title: "gagal",
        text: "Data gagal di simpan",
        icon: "info",
        button: true
      });
};