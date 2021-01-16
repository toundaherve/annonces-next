import { useEffect, useRef } from "react";

const useModalLoading = () => {
  const modal = useRef(null);

  useEffect(() => {
    modal.current = new bootstrap.Modal(
      document.getElementById("modalLoading"),
      {
        keyboard: false,
      }
    );
  }, [modal]);

  return modal;
};

export default useModalLoading;
