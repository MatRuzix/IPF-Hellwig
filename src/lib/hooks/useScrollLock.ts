function useScrollLock() {
  const lockScroll = () => document.body.classList.add("overflow-hidden");
  const unlockScroll = () => document.body.classList.remove("overflow-hidden");

  return { lockScroll, unlockScroll };
}
export default useScrollLock;
