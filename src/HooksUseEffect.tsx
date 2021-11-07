import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";

const API = "https://api.muxiaoguo.cn/api/Baike?type=Sogo&word=仙人掌";

interface ResponseData {
  ImgUrl: string;
  content: string;
}

interface ResponsePromise<T> {
  data: {
    code: number;
    data: T;
    message: string;
  };
}
const requestBaike = (): Promise<ResponsePromise<ResponseData>> => {
  return axios.get(API);
};

interface Props {}
interface ReactFunction<T> extends React.FC<T> {
  useImage: () => JSX.Element;
}

const HooksUseEffect: ReactFunction<Props> = (): JSX.Element => {
  const imgSrc = HooksUseEffect.useImage();

  return (
    <div>
      hello world <br />
      {imgSrc}
    </div>
  );
};

const style = {
  color: "lightskyblue",
  fontSize: "20",
};

HooksUseEffect.useImage = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const handleFetch = useCallback(async () => {
    const {
      data: { data },
    } = await requestBaike();
    setImgSrc(data.ImgUrl);
  }, []);
  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  if (imgSrc) {
    return <img src={imgSrc} alt={imgSrc} />;
  } else {
    return <p style={style}>loading...</p>;
  }
};

export default HooksUseEffect;
