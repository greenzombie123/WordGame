export function Modal({modalRef, children, className = "modal"}){
    return (
        <dialog className={className} ref={modalRef}>
            {children}
        </dialog>
    )
}