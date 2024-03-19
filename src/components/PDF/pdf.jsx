import React from "react";
import newLogo from "../../assets/img/image001.png";
import staticImage from "../../assets/img/static.png";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "Roboto Medium",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});
Font.register({
  family: "Roboto Thin",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf",
});
Font.register({
  family: "Roboto Regular",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
});
function pdf() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#fff",
      textAlign: "center",
      fontFamily: "Roboto Medium",
      position: "relative",
    },
    pageInfo: {
      flexDirection: "row",
      backgroundColor: "#fff",
      textAlign: "left",
      fontFamily: "Roboto Regular",
      position: "relative",
      fontSize: "11px",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      border: "2px solid black",
    },
    mainHeader: {
      textAlign: "center",
      position: "relative",
      top: "30%",
      fontSize: "24px",
      fontWeight: "bold",
    },
    mainHeadersec: {
      textAlign: "center",
      position: "relative",
      top: "30%",
      fontSize: "24px",
      fontWeight: "bold",
    },
    subHeader: {
      textAlign: "center",
      position: "relative",
      top: "50%",
      fontSize: "22px",
      fontWeight: "bold",
    },
    subHeadersec: {
      textAlign: "center",
      position: "relative",
      top: "50%",
      fontSize: "22px",
      fontWeight: "bold",
    },
    logo: {
      width: "200px",
      objectFit: "contain",
    },
    date: {
      textAlign: "center",
      position: "relative",
      top: "75%",
      fontSize: "16px",
      fontWeight: "bold",
    },
    pageHeader: {
      textAlign: "center",
      margin: "10px",
    },
    pageCounter: {
      fontSize: "11px",
      position: "absolute",
      top: "100%",
      left: "50%",
      fontFamily: "Roboto Thin",
    },
  });
  return (
    <PDFViewer style={{ width: "100%", height: "100dvh" }}>
      <Document>
        <Page size="A4" style={[styles.page, { flexDirection: "row" }]}>
          <View style={styles.section}>
            <Image src={newLogo} style={styles.logo} />
            <Text style={styles.mainHeader}>İTM.394</Text>
            <Text style={styles.mainHeadersec}>154 kV MERAM GIS TM</Text>
            <Text style={styles.subHeader}>YÜKSEK GERİLİM AC GIS TESTİ</Text>
            <Text style={styles.subHeadersec}>TEKNİK RAPORU</Text>
            <Text style={styles.date}>ŞUBAT 2024</Text>
          </View>
        </Page>
        <Page
          size="A4"
          style={[styles.page, { flexDirection: "row", fontSize: "11px" }]}
          orientation="landscape"
        >
          <View style={styles.section}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                fontFamily: "Roboto Regular",
              }}
            >
              <View
                style={{
                  border: "1px solid black",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text>TEST</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      1
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Rapor Tarihi
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    4.03.2024
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      IEC Standardı
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    60840
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      3
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Test Sistemi
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Jiangsu Shenghua
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Jeneratör Gücü
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    132 kVA (prime)
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "60px",
                        paddingTop: "2px",
                        paddingTop:'22px'
                      }}
                    >
                      5
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "60px",
                        paddingTop:'22px'
                      }}
                    >
                      Gerilim Tatbik Noktası
                    </Text>
                  </View>
                  <View style={{ width: "160px",borderLeft:'1px solid black',height: "60px",
                        paddingTop: "2px", }}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom:'1px solid black',
                        width:'169px',
                        height:'20px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",height: "18px",
                          paddingTop: "0px",
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(-1px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",height: "20px",
                        paddingTop: "2px",
                        borderBottom:'1px solid black',
                        width:'169px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop:'-2px'
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(-1px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width:'169px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(0px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  border: "1px solid black",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text>KABLO</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      1
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Üretici Firma
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    PRYSMIAN
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Kapasitans
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    170 nF/km
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Jeneratör Gücü
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    132 kVA (prime)
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px solid black",
                    padding: "0px 5px",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",height: "60px",
                        paddingTop: "2px",
                        paddingTop:'22px'
                      }}
                    >
                      5
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",height: "60px",
                        paddingTop:'22px'
                      }}
                    >
                      Gerilim Tatbik Noktası
                    </Text>
                  </View>
                  <View style={{ width: "160px",borderLeft:'1px solid black',height: "60px",
                        paddingTop: "2px", }}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom:'1px solid black',
                        width:'169px',
                        height:'20px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",height: "18px",
                          paddingTop: "0px",
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(-1px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",height: "20px",
                        paddingTop: "2px",
                        borderBottom:'1px solid black',
                        width:'169px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop:'-2px'
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(-1px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width:'169px'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                        }}
                      >
                        MERAM GIS TM
                      </Text>
                      <Text
                        style={{
                          borderLeft:'1px solid black',
                          height:'22px',
                          paddingTop:'3.5px',
                          paddingLeft:'7px',
                          paddingRight:'7px',
                          transform:'translateY(0px)'
                        }}
                      >
                        X
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.pageCounter}>2/7</Text>
          </View>
        </Page>
        <Page size="A4" style={[styles.pageInfo, { flexDirection: "row" }]}>
          <View style={styles.section}>
            <Text style={{ fontFamily: "Roboto Medium", lineHeight: "1.5" }}>
              1.Yüksek Gerilim AC Testi
            </Text>
            <Text>
              Test IEC 60840 standardının 16.3 no.lu maddesine göre uygulanır.
            </Text>
            <Text
              style={{
                fontFamily: "Roboto Medium",
                marginTop: "5px",
                lineHeight: "1.5",
              }}
            >
              2. Amaç
            </Text>
            <Text style={{ lineHeight: "1.5" }}>
              Sistem elemanlarının (güç kablosu ve kablo aksesuarları)
              yalıtımının sağlamlığını test etmektir.
            </Text>
            <Text
              style={{
                fontFamily: "Roboto Medium",
                marginTop: "5px",
                lineHeight: "1.5",
              }}
            >
              3. Test Prosedürü
            </Text>
            <Text style={{ lineHeight: "1.5" }}>
              Çalışma kurulumunda devre tamamlanmış olmalıdır (bir ya da her iki
              kablo başlığı izole edilerek). Devre bağlantısı veya kesilmesi
              için gerekli trafo işleri müşterinin kapsamındadır. ZRD
              Mühendislik sadece gerilimi uygulamadan önce hattı kontrol edecek
              ve test işleminin doğru bir şekilde yapılmasını sağlayacaktır.
            </Text>
            <Text style={{ marginTop: "5px", lineHeight: "1.5" }}>
              Test hazırlığı esnasında hem testi yapılan güç kablosu hem de bu
              kabloya yakın olan diğer güç kabloları için gerilim uygulama
              noktası ile topraklamalar arasında gerilim kademesi ile doğru
              orantılı olarak 2 kV/cm uzaklık olmasına dikkat edilecektir.
            </Text>
            <Text
              style={{
                fontFamily: "Roboto Medium",
                marginTop: "5px",
                lineHeight: "1.5",
              }}
            >
              4. Uygulanan Gerilim
            </Text>
            <Text style={{ lineHeight: "1.5" }}>
              IEC 60840 standardının 16.3. no.lu maddesi uyarınca test
              geriliminin dalga formu sinüsoidal, frekansı ise 20 Hz ile 300 Hz
              arasında değişken olacaktır. Test gerilimi aşağıdaki tabloya uygun
              olacak şekilde 1 (bir) saat süreyle uygulanır. Alternatif olarak,
              Uo gerilimi 24 (yirmi dört) saat süreyle de uygulanabilir.
            </Text>
            <Image
              src={staticImage}
              style={{
                width: "70%",
                margin: "0 auto ",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            />
            <Text
              style={{
                fontFamily: "Roboto Medium",
                marginTop: "10px",
                lineHeight: "1.5",
              }}
            >
              5. Test Uygulaması
            </Text>
            <Text style={{ lineHeight: "1.5" }}>
              Bu test kablo devresini herhangi bir akım çekmeyecek şekilde
              sadece bir uçta ve Uo geriliminde elektrik şebekesine bağlanarak
              veya harici bir güç kaynağı kullanarak iki farklı şekilde
              yapılabilir. Test bağlantısı gerilim kaynağı üzerine yapılmalı ve
              karşı uç açık bırakılmalıdır. Harici güç kaynağının sağlanması
              müşteri sorumluluğundadır.
            </Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{
                height: "120px",
                maxWidth: "80%",
                margin: "0 auto",
                width: "80%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Text style={{ lineHeight: "1.5" }}>
              Güvenlik önlemleri test başlamadan önce ZRD’nin test mühendisi
              tarafından kontrol edilecek ve sözleşmenin her iki tarafı da bu
              hususta mutabakat sağlayacaktır.
            </Text>
            <Text
              style={{
                fontFamily: "Roboto Medium",
                marginTop: "5px",
                lineHeight: "1.5",
              }}
            >
              6. Değerlendirme Kriteri
            </Text>
            <Text style={{ lineHeight: "1.5" }}>
              Test süresince güç kablosu sistem elemanlarında herhangi bir
              yalıtım arızası meydana gelmezse test sonucu olumlu kabul edilir.
            </Text>
          </View>
        </Page>
        <Page
          size="A4"
          style={[styles.page, { flexDirection: "row" }]}
          orientation="landscape"
        >
          <View style={styles.section}>
            <Text style={styles.pageHeader}>KURULUM ŞEMASI</Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
            />
            <Text style={styles.pageCounter}>3/7</Text>
          </View>
        </Page>
        <Page size="A4" style={[styles.page, { flexDirection: "row" }]}>
          <View style={styles.section}>
            <Text style={styles.pageHeader}>TRAFO -A (A FAZI)</Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <Text style={styles.pageHeader}>TEST GRAFİĞİ</Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <Text style={styles.pageCounter}>6/7</Text>
          </View>
        </Page>
        <Page size="A4" style={[styles.page, { flexDirection: "row" }]}>
          <View style={styles.section}>
            <Text style={styles.pageHeader}>
              SAHA FOTOĞRAFI ve UYDU GÖRÜNTÜSÜ
            </Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <Text style={styles.pageHeader}>MERAM GIS TRAFO MERKEZİ</Text>
            <Image
              src="https://picsum.photos/200/300"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <Text style={styles.pageCounter}>7/7</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default pdf;
