import swal from 'sweetalert2'

export function toast(text: string, icon?: string) {
    swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: text,
        icon: icon == "error" ? "error" : "success"
    });
}

export function alert(title: string, text: string, icon?: string) {
    swal.fire({
        title: title,
        text: text,
        icon: icon === "error" ? "error" : icon === "warning" ? "warning" : "success",
    });
}


export function confirm(title: string, text: string, action: () => void, icon?: string) {
    swal.fire({
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        icon: icon == "warning" ? "warning" : "question"
    }).then((result) => {
        if (result.isConfirmed) {
            action();
        }
    });
}