import { makeStyles } from "@mui/styles";
export const CarrerMuiStyles = makeStyles({
    carrerPageContainer: {
        background: '#FBFBFB 0% 0% no-repeat padding-box',
    },
    carrerPage: {
        width: "88%",
        margin: "0 auto",
        paddingTop: "4%",
        paddingBottom: "10%",
    },
    companyPositionTitle: {
        background: '#FFEBDE 0% 0% no-repeat padding-box',
        borderRadius: '9px',
        textAlign: "center",
        letterSpacing: '1.34px',
        color: '#FF9551',
        '@media(min-width:901px)': {
            font: 'normal normal 22px PoppinsRegular',
            padding: "0.4rem 1rem",
        },
        '@media(max-width:900px)': {
            font: 'normal normal 18px PoppinsRegular',
            padding: "0.4rem 1rem",
        }

    },
    carrerTitleText: {
        letterSpacing: '1.06px',
        color: ' #040A26',
        marginTop: "1rem",
        '@media(min-width:901px)': {
            font: 'normal normal bold 20px PoppinsBold',
        },
        '@media(max-width:900px)': {
            font: 'normal normal bold 18px PoppinsBold',
        }
    },
    role: {
        '& span:first-child': {
            '@media(min-width:901px)': {
                font: 'normal normal normal 16px PoppinsRegular',
                letterSpacing: '1.8px',
                color: '#A9A9AA'
            },
            '@media(max-width:900px)': {
                font: 'normal normal normal 12px PoppinsRegular',
                letterSpacing: '1.8px',
                color: '#A9A9AA'
            }
        },
        '& span:nth-child(2)': {
            '@media(min-width:901px)': {
                font: 'normal normal 600 18px PoppinsSemiBold',
                letterSpacing: '2.2px',
                color: '#FF9551'
            },
            '@media(max-width:900px)': {
                font: 'normal normal medium 14px PoppinsMedium',
                letterSpacing: '2.2px',
                color: '#FF9551'
            }

        },
        '& span:nth-child(3)': {
            '@media(min-width:901px)': {
                font: 'normal normal 16px PoppinsMedium',
                letterSpacing: '1.8px',
                color: '#818181'
            },
            '@media(max-width:900px)': {
                font: 'normal normal 12px PoppinsMedium',
                letterSpacing: '1.8px',
                color: '#818181'
            }
        }
    },
    location: {
        '& span:first-child': {
            '@media(min-width:901px)': {
                font: 'normal normal normal 16px PoppinsRegular',
                letterSpacing: '2.2px',
                color: '#A9A9AA'
            },
            '@media(max-width:900px)': {
                font: 'normal normal normal 12px PoppinsRegular',
                letterSpacing: '2.2px',
                color: '#A9A9AA'
            }
        },
        '& span:nth-child(2)': {
            '@media(min-width:901px)': {
                font: 'normal normal 16px PoppinsBold',
                letterSpacing: '1.8px',
                color: '#060520'
            },
            '@media(max-width:900px)': {
                font: 'normal normal 12px PoppinsMedium',
                letterSpacing: '1.8px',
                color: '#020B17'
            },

        },
    },
    viewDetails: {
        background: "#FFEFE6 0% 0% no-repeat padding-box",
        borderRadius: "8px",
        letterSpacing: "1.8px",
        color: "#FF9551",
        textAlign: "center",
        textTransform: 'none',
        "&:hover": {
            background: "#FF9551 0% 0% no-repeat padding-box",
            color: "#FFFFFF",
            borderRadius: "8px",
        },
        '@media(min-width:901px)': {
            font: "normal normal normal 16px PoppinsRegular",
            padding: "0.8rem 1.4rem"
        },
        '@media(max-width:900px)': {
            font: "normal normal normal 10px PoppinsRegular",
            padding: "0.5rem 0.5rem",
        }
    },
    borderLine: {
        marginTop: "0.8rem",
        borderBottom: '1px solid #DFDFDF'
    },
    seeAllOpportunitiesBtn: {
        background: "#FF9551 0% 0% no-repeat padding-box",
        borderRadius: "9px",
        opacity: 1,
        letterSpacing: "1.8px",
        color: "#FFFFFF",
        textAlign: "left",
        textTransform: 'none',
        "&:hover": {
            background: "#FF9551 0% 0% no-repeat padding-box",
            borderRadius: "9px",
        },
        '@media(min-width:901px)': {
            font: "normal normal 600 16px PoppinsSemiBold",
            padding: "0.9rem 1.4rem",
            width: '261px',
            height: '52px',
        },
        '@media(max-width:900px)': {
            font: "normal normal 600 16px PoppinsSemiBold",
            padding: "0.5rem 1rem",
            width: '260px',
            height: '40px',
        }
    }

})
