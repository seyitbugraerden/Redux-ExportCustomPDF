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
      fontSize: "11px",
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
                      paddingLeft: "10px",
                      height: "20px",
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
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
                      IEC Standardı
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      3
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
                      Test Sistemi
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
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
                      Jeneratör Gücü
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
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
                      5
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
                      Gerilim Tatbik Noktası
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    MERAM GIS TM
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
                        paddingLeft: "5px",
                        height: "70px",
                        paddingTop: "2px",
                        paddingTop: "22px",
                      }}
                    >
                      5
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "70px",
                        paddingTop: "22px",
                      }}
                    >
                      Başlık Tipi
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "160px",
                      borderLeft: "1px solid black",
                      height: "70px",
                      paddingTop: "2px",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        width: "169px",
                        height: "20px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          height: "18px",
                          paddingTop: "0px",
                        }}
                      >
                        Harici-Harici
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        height: "20px",
                        paddingTop: "2px",
                        borderBottom: "1px solid black",
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop: "-2px",
                        }}
                      >
                        Dahili-Harici
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                        }}
                      >
                        Dahili-Dahili
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "30px",
                          paddingTop: "7px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(0px)",
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
                      paddingLeft: "10px",
                      height: "20px",
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
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
                      Kapasitans
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
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
                    position: "relative",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                        paddingLeft: "5px",
                        height: "110px",
                        paddingTop: "50px",
                      }}
                    >
                      3
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "110px",
                        paddingTop: "50px",
                      }}
                    >
                      KESİT
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "160px",
                      borderLeft: "1px solid black",
                      paddingTop: "2px",
                      height: "110px",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        width: "169px",
                        height: "20px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          height: "18px",
                          paddingTop: "0px",
                        }}
                      >
                        630 mm²
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        height: "20px",
                        paddingTop: "2px",
                        borderBottom: "1px solid black",
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop: "-2px",
                        }}
                      >
                        1000 mm²
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        height: "20px",
                        paddingTop: "2px",
                        borderBottom: "1px solid black",
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop: "-2px",
                        }}
                      >
                        1600 mm²
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        height: "20px",
                        paddingTop: "2px",
                        borderBottom: "1px solid black",
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                          paddingTop: "-2px",
                        }}
                      >
                        2000 mm²
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(-1px)",
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
                        width: "169px",
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: "11px",
                          textAlign: "left",
                        }}
                      >
                        2500 mm²
                      </Text>
                      <Text
                        style={{
                          borderLeft: "1px solid black",
                          height: "22px",
                          paddingTop: "3.5px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          transform: "translateY(0px)",
                        }}
                      >
                        X
                      </Text>
                    </View>
                  </View>
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
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
                      X
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    X
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                fontFamily: "Roboto Regular",
                marginTop: "40px",
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
                <Text>TEST EKİBİ</Text>
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
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Test Mühendisi
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Fikret Can AKGÖZ
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Test Teknikeri
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Serdal BİLİR
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      3
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Test Teknisyeni
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Zafer KOÇ
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Test Teknisyeni
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Taha KILIÇ
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      5
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      Tır Şoförü
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    Mehmet UZUNOĞLU
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      6
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    ></Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  ></Text>
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      7
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "140px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    ></Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  ></Text>
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
                <Text>KATILIMCILAR</Text>
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
                      Fikret KEÇERCİ
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    TEİAŞ 9. Bölge Müdürlüğü
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      2
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
                      Sinan SONSES
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      3
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
                      İ. Barış KÜÇÜKİBA
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    GES
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      4
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
                      Murat OKTAY
                    </Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  >
                    SIEYUANS
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      5
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    ></Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  ></Text>
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      6
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    ></Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  ></Text>
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
                        paddingLeft: "5px",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    >
                      7
                    </Text>
                    <Text
                      style={{
                        paddingLeft: "5px",
                        width: "200px",
                        textAlign: "left",
                        height: "20px",
                        paddingTop: "2px",
                      }}
                    ></Text>
                  </View>
                  <Text
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      height: "20px",
                      paddingTop: "2px",
                    }}
                  ></Text>
                </View>
              </View>
            </View>
            <Text style={styles.pageCounter}>2/7</Text>
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
                  width: "400px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    height: "70px",
                    borderBottom: "1px solid black",
                    paddingTop: "20px",
                  }}
                >
                  AÇIKLAMA
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Text
                    style={{
                      borderRight: "1px solid black",
                      height: "100%",
                      paddingTop: "23px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontFamily: "Roboto Medium",
                    }}
                  >
                    1
                  </Text>
                  <Text style={{ maxWidth: "50px", margin: "0 auto" }}>
                    TRAFO - A FİDERİ
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Text
                    style={{
                      borderRight: "1px solid black",
                      height: "100%",
                      paddingTop: "23px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontFamily: "Roboto Medium",
                    }}
                  >
                    2
                  </Text>
                  <Text style={{ maxWidth: "50px", margin: "0 auto" }}>
                    TRAFO - B FİDERİ
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      borderRight: "1px solid black",
                      height: "100%",
                      paddingTop: "23px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontFamily: "Roboto Medium",
                    }}
                  >
                    3
                  </Text>
                  <Text style={{ maxWidth: "50px", margin: "0 auto" }}>
                    TRAFO - C (YEDEK)
                  </Text>
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
                <Text style={{ borderBottom: "1px solid black" }}>KABLO</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View
                    style={{
                      width: "13%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      FAZ
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        A
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        B
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>C</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        A
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        B
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>C</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        A
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        B
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>C</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "29%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      İletken Kesiti (mm²)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        630
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        630
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        630
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "29%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Uzunluk (M)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        26,82
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        25,37
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>23,71</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        48,26
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        47,34
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>47,58</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        62,57
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        61,92
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>61,76</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "29%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Toplam Uzunluk (M)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        26,82
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        25,37
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>23,71</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        48,26
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        47,34
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>47,58</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        62,57
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        61,92
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>61,76</Text>
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
                <Text style={{ borderBottom: "1px solid black" }}>TEST</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View
                    style={{
                      width: "20%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Gerilim (kV)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        150
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        150
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        150
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Süre (dk)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        60
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        60
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Text
                        style={{
                          paddingTop: "21px",
                          paddingBottom: "3px",
                        }}
                      >
                        60
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Test Akımı (A)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,40
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,30
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}> 2,30</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,60
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,60
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>2,60</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,80
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        2,80
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}> 2,80</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Rezonans Frekansı (Hz)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        163,42
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        164,77
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>166,29</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        147,32
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        147,81
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>148,04</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        138,96
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        139,38
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>139,75</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  border: "1px solid black",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text style={{ borderBottom: "1px solid black" }}>
                  UYGULAMA
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View
                    style={{
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Sıcaklık (C°)
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        9
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        10
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>9</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        10
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        10
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>9</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        11
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        12
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>10</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Saat
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        11:36
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        15:23
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>18:25</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        12:12
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        16:03
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>19:28</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        10:50
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        15:09
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>18:45</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "120%",
                      borderRight: "1px solid black",
                      paddingTop: "20px",
                    }}
                  >
                    <Text
                      style={{
                        height: "34.4px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Tarih
                    </Text>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        03.03.24
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        03.03.24
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>03.03.24</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        02.03.24
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        02.03.24
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>02.03.24</Text>
                    </View>
                    <View
                      style={{
                        height: "60px",
                        borderBottom: "1px solid black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        01.03.24
                      </Text>
                      <Text
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "3px",
                        }}
                      >
                        01.03.24
                      </Text>
                      <Text style={{ paddingBottom: "3px" }}>01.03.24</Text>
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
