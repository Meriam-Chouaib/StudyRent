import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
interface ToastProps {
  type: 'success' | 'error' | 'warn' | 'info';
  text: string;
  close?: number | false;
}

export const Toast = ({ type, text, close }: ToastProps) => {
  useEffect(() => {
    switch (type) {
      case 'success':
        toast.success(text, { position: toast.POSITION.TOP_CENTER });
        break;
      case 'error':
        toast.error(text, { position: toast.POSITION.TOP_CENTER });
        break;
      case 'warn':
        toast.warn(text, { position: toast.POSITION.TOP_CENTER });
        break;
      default:
        toast.info(text, { position: toast.POSITION.TOP_CENTER, autoClose: close });
        break;
    }
  }, []);
  return (
    <>
      <ToastContainer />
    </>
  );
};
