import React from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "../styles/AboutStyled";
import Image from "next/image";
import FirstImage from "../assets/aboutus_first.png";
import BackGroudAbout from "../assets/aboutbackground2.png";

const About = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();

  return (
    <div className={classes.about_main}>
      <div className={classes.about_firstParagraph}>
        <h1 className={classes.about_h1}>
          Le & Re, nền tảng thuê-cho thuê đồ đầu tiên tại Việt Nam
        </h1>
        <p className={classes.about_p}>
          Etsy is the global marketplace for unique and creative goods. It’s
          home to a universe of special, extraordinary items, from unique
          handcrafted pieces to vintage treasures.
        </p>
        <div className={classes.about_image}>
          <Image
            src={FirstImage}
            height={400}
            width={480}
            layout="responsive"
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={BackGroudAbout} className={classes.about_background} />
        <div className={classes.about_content}>
          <h2 className={classes.about_h2}>Tại sao chúng tôi tạo ra Le & Re</h2>
          <p className={classes.about_p}>
            Vài dòng chém gió gì đó. Chủ yếu kể ra những painpoint hiện tại và
            giải quyết chúng như thế nào. As a company, we strive to lead with
            our guiding principles and to help spread ideas of sustainability
            and responsibility whose impact can reach far beyond our own
            business.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <p>Bên đi thuê</p>
              <p>
                Vài dòng giới thiệu về bên đi thuê sẽ có những lợi ích gì đó,
                chém chém mấy câu vào. From the specific to the unexpected (or
                custom-made), our search tools help buyers explore all the
                special one-of-a-kind.
              </p>
            </div>
            <div>
              <span>Khám phá sản phẩm</span>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p>Bên cho thuê</p>
              <p>
                Vài dòng giới thiệu về bên cho thuê sẽ có những lợi ích gì đó,
                chém chém mấy câu vào. From the specific to the unexpected (or
                custom-made), our search tools help buyers explore all the
                special.
              </p>
            </div>
            <div>
              <span>Đăng ký cho thuê</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
