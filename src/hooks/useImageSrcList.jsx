import { useEffect, useState } from "react";

export const useImageSrcList = (words) => {
  const [imageSrcList, setImageSrcList] = useState([]);

  useEffect(() => {
    const fileList = words.map((word) => word.file);
    const objectUrlList = fileList.map(
      (file) => file && URL.createObjectURL(file)
    );
    setImageSrcList([...objectUrlList]);

    return () => {
      objectUrlList.forEach(
        (objectUrl) => objectUrl && URL.revokeObjectURL(objectUrl)
      );
    };
  }, [words]);

  return {imageSrcList}
};
