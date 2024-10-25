export const useConfirm = (msg="",onConfirm,onCancel) => {
    if( onConfirm &&typeof onConfirm !== "function" || typeof onCancel !== "function") return;
    const confirmAction  = () => {
      if(confirm(msg)){
        onConfirm()
      }else{
        onCancel()
      }
    }
    return confirmAction
}
  