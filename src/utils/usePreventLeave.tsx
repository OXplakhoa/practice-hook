//Make a pop-up appear to user that they may have leaved site without saved.
export const usePreventLeave = () => {
    const listener = (e) => {
      e.preventDefault();
    }
    const enablePrevent  = ()  => window.addEventListener("beforeunload",listener) 
    const disablePrevent  = ()  => window.removeEventListener("beforeunload",listener)
    return {enablePrevent,disablePrevent}
  }