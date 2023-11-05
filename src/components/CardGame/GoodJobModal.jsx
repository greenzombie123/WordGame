import { ButtonPanel } from "../util/ButtonPanel";
import { Modal } from "../util/Modal";
import { GifImage } from "./GifImage";


export const GoodJobModal = ({modalRef, resetWordGame, gif = null}) => {
  return (
    <Modal modalRef={modalRef} className={"modal_goodJobDisplay"}>
      <GifImage gif={gif}></GifImage>
      <ButtonPanel
        names={["Start New Round"]}
        callbacks={[resetWordGame]}
      ></ButtonPanel>
    </Modal>
  );
};
