import Image from "next/future/image";
import { Imgcapcha, Imgleft, Imgright, Logo } from "../@img";

import styles from "../../styles/css/Pc.module.css";
import { useState } from "react";

const LoginRegisterPC = () => {
  const [login, setLogin] = useState(true);
  function handleClickRegister() {
    setLogin(false)
  }

  function handleClickLogin() {
    setLogin(true)
  }
  return (
    <main>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src={Imgleft} alt="" />
          </div>
          <>
          {login ? 
              <div className={styles.card}>
                <div className={styles.grid}>
                  <div className={styles.card} onClick={handleClickRegister}>
                    <div className={styles.loginRegisterTitle}>
                      <p className={styles.titleRight}>ĐĂNG KÍ</p>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.loginTitle}>
                      <p className={styles.titleLeft} onClick={handleClickLogin}>
                        ĐĂNG NHẬP
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Tên đăng nhập"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Mật khẩu"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <div className={styles.card}>
                      <form className={styles.intputBackground}>
                        <div className={styles.titleIntputCapcha}>
                          <span>
                            <input
                              className={styles.inputCapcha}
                              type="text"
                              placeholder="Mã Xác Minh"
                            />
                          </span>
                          <span>
                            <Image src={Imgcapcha} alt="" />
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <input
                      className={styles.checkBox}
                      type="checkbox"
                      placeholder="Mã Xác Minh"
                    />
                    <text>Tôi đã đủ tuổi & đồng ý chính sách thành viên</text>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <div className={styles.register}>
                      <div className={styles.card}>
                        <p className={styles.tileRegister}>ĐĂNG KÍ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             : 
              <div className={styles.card}>
                <div className={styles.grid}>
                  <div className={styles.card} onClick={handleClickRegister}>
                    <div className={styles.registerTitle}>
                      <p className={styles.titleLeft}>ĐĂNG KÍ</p>
                    </div>
                  </div>

                  <div className={styles.card} onClick={handleClickLogin}>
                    <div className={styles.registerLoginTitle}>
                      <p className={styles.titleRight}>ĐĂNG NHẬP</p>
                    </div>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Tên đăng nhập"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Mật khẩu"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Họ Và Tên"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <form className={styles.intputBackground}>
                      <div className={styles.titleIntput}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Số Điện Thoại"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <div className={styles.card}>
                      <form className={styles.intputBackground}>
                        <div className={styles.titleIntputCapcha}>
                          <span>
                            <input
                              className={styles.inputCapcha}
                              type="text"
                              placeholder="Mã Xác Minh"
                            />
                          </span>
                          <span>
                            <Image src={Imgcapcha} alt="" />
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <input
                      className={styles.checkBox}
                      type="checkbox"
                      placeholder="Mã Xác Minh"
                    />
                    <text>Tôi đã đủ tuổi & đồng ý chính sách thành viên</text>
                  </div>
                </div>

                <div className={styles.formInput}>
                  <div className={styles.grid}>
                    <div className={styles.register}>
                      <div className={styles.card}>
                        <p className={styles.tileRegister}>ĐĂNG KÍ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
          <div className={styles.card}>
            <Image src={Imgright} alt="" />
          </div>
        </div>
        <div className={styles.footer}>
          <p>
            789BET – LINK TẢI 789BET APK/ IOS MỚI NHẤT
            <br></br>
            <span> NHÀ CÁI HÀNG ĐẦU CHÂU Á</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginRegisterPC;
