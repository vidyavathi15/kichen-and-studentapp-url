import { makeStyles } from "@mui/styles";
import { scrollBarStyles } from "../Home/homeStyles";

export const CarrerSendCvStyles = makeStyles({
    carrerSendCvContainer: {
        background: '#FBFBFB 0% 0% no-repeat padding-box',
    },
    carrerSendCv: {
        width: "88%",
        margin: "0 auto",
        paddingTop: "2%",
        paddingBottom: "6%",
    },
    jobDescriptionContainer: {
        '@media(min-width:901px)': {
            // marginTop: "0.5rem",
            paddingRight: "1.5rem",
            // minHeight: '40vh',
            // height: "64vh",
            // maxheight: "100%",
            // overflowY: 'auto',
            // "& #overflow": { height: "64vh" },
            // ...scrollBarStyles
        }
    },
    copmanyPositionTitle: {
        background: '#FFEBDE 0% 0% no-repeat padding-box',
        borderRadius: '9px',
        textAlign: "center",
        font: 'normal normal 28px PoppinsMedium',
        letterSpacing: '1.34px',
        color: '#FF9551',
        '@media(min-width:901px)': {
            font: 'normal normal 22px PoppinsRegular',
            padding: "0.4rem 1rem",
        },
        '@media(max-width:900px)': {
            font: 'normal normal 18px PoppinsRegular',
            padding: "0.4rem 1rem",
            marginTop: "1rem"
        }

    },
    jobDescriptionTitleText: {
        letterSpacing: '0.86px',
        color: ' #040A26',
        marginTop: "0.6rem",
        '@media(min-width:901px)': {
            font: 'normal normal bold 20px PoppinsBold',
        },
        '@media(max-width:900px)': {
            font: 'normal normal bold 16px PoppinsBold',
        }
    },
    jobDescriptionContent: {
        letterSpacing: '0.77px',
        color: '#444444',
        textAlign: "justify",
        '@media(min-width:901px)': {
            font: 'normal normal normal 16px PoppinsRegular',
        },
        '@media(max-width:900px)': {
            font: 'normal normal normal 14px PoppinsRegular',
        },
    },
    jobDescriptionHeading: {
        letterSpacing: '0.77px',
        color: '#FF9551',
        '@media(min-width:901px)': {
            font: 'normal normal normal 18px PoppinsRegular',
        },
        '@media(max-width:901px)': {
            font: 'normal normal normal 16px PoppinsRegular',
        },
    },
    applyJobApplicationContainer: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '9px',
        width: '100%',
        '@media(min-width:901px)': {
            padding: "1rem 1rem",
        },
        '@media(max-width:901px)': {
            padding: "1rem 1.4rem",
        },
    },
    applyJobAppHeaderLabels: {
        '& h6': {
            '@media(min-width:901px)': {
                textAlign: 'left',
                font: 'normal normal 600 18px PoppinsSemiBold',
                letterSpacing: '0.86px',
                color: '#444444'
            },
            '@media(max-width:900px)': {
                textAlign: 'left',
                font: 'normal normal 600 10px PoppinsSemiBold',
                letterSpacing: '0.86px',
                color: '#444444'
            }
        },
        '& span': {
            '@media(min-width:901px)': {
                textAlign: 'left',
                font: 'normal normal normal 18px/27px PoppinsRegular',
                letterSpacing: '0.86px',
                color: '#FF9551',
            },
            '@media(max-width:900px)': {
                textAlign: 'left',
                font: 'normal normal normal 10px PoppinsRegular',
                letterSpacing: '0.86px',
                color: '#FF9551',
            }
        }
    },
    verticalBorder: {
        borderRight: "1px solid #FFBF97"
    },
    horizontalBorder: {
        marginTop: "2rem",
        '@media(min-width:901px)': {
            borderBottom: '1px solid #EFEFEF',
        },
        '@media(max-width:900px)': {
            borderBottom: '1px solid  #FFBF97',
        }
    },
    closeBtn: {
        background: "#F3F3F3 0% 0% no-repeat padding-box",
        borderRadius: "9px",
        opacity: 1,
        letterSpacing: "0.86px",
        color: "#A9A9AA",
        textTransform: 'none',
        textAlign: "center",
        "&:hover": {
            background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "9px",
        },
        '@media(min-width:901px)': {
            font: "normal normal 18px PoppinsMedium",
            padding: "0.5rem 1rem",
        },
        '@media(max-width:900px)': {
            font: "normal normal 16px PoppinsMedium",
            padding: "0.3rem 1rem",
        }
    },
    applyBtn: {
        background: "#FFEBDE 0% 0% no-repeat padding-box",
        borderRadius: "9px",
        opacity: 1,
        letterSpacing: "0.86px",
        color: "#FF9551;",
        textTransform: "none",
        textAlign: "center",
        '@media(min-width:901px)': {
            font: "normal normal 18px PoppinsMedium",
            padding: "0.5rem 1rem",
        }, '@media(max-width:900px)': {
            padding: "0.3rem 1rem",
            font: "normal normal 14px PoppinsMedium",
        },
        "&:hover": {
            background: "#FFEBDE 0% 0% no-repeat padding-box",
            borderRadius: "9px",
        }
    },
    positionPostedDate: {
        '& span:first-child': {
            '@media(min-width:901px)': {
                textAlign: 'left',
                font: 'normal normal 600 14px PoppinsSemiBold',
                letterSpacing: '0.67px',
                color: '#444444'
            },
            '@media(max-width:900px)': {
                textAlign: 'left',
                font: 'normal normal 600 12px PoppinsSemiBold',
                letterSpacing: '0.67px',
                color: '#444444'
            },
        },
        '& span:last-child': {
            '@media(min-width:901px)': {
                textAlign: 'left',
                font: 'normal normal normal 14px PoppinsRegular',
                letterSpacing: '0.67px',
                color: '#444444'
            },
            '@media(max-width:900px)': {
                textAlign: 'left',
                font: 'normal normal normal 12px PoppinsRegular',
                letterSpacing: '0.67px',
                color: '#444444'
            },

        }
    },
    positionLabel: {
        marginTop: '1rem',
        textAlign: 'left',
        font: 'normal normal 600 18px PoppinsSemiBold',
        letterSpacing: '0.86px',
        color: '#444444'
    },
    uploadResumeBtn: {
        marginTop: "1rem",
        border: "1px solid #E1E1E1",
        background: "#F6F6F6 0% 0% no-repeat padding-box",
        borderRadius: "8px",
        font: "normal normal normal 16px PoppinsRegular",
        color: "#040A26",
        letterSpacing: "0.77px",
        textTransform: "none",
        padding: "1rem",
        width: "100%",
        "&:hover": {
            border: "1px solid #E1E1E1",
            background: "#F6F6F6 0% 0% no-repeat padding-box",
            borderRadius: "8px",
        }
    },
    uploadResumeBtnLabel: {
        color: "#040A26",
        letterSpacing: "0.77px",
        '@media(min-width:901px)': {
            font: "normal normal normal 16px PoppinsRegular",
        },
        '@media(max-width:900px)': {
            font: "normal normal normal 14px PoppinsRegular",
        }
    },
    sendApplicationBtn: {
        background: '#FF9551 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        letterSpacing: ' 0.86px',
        color: '#FFFFFF',
        textAlign: "center",
        textTransform: "none",
        "&:hover": {
            background: "#FF9551 0% 0% no-repeat padding-box",
            borderRadius: "8px",
        },
        '@media(min-width:901px)': {
            font: 'normal normal 18px PoppinsMedium',
        },
        '@media(max-width:900px)': {
            font: 'normal normal 14px PoppinsMedium',
        }
    },
    listContent: {
        "& .MuiListItemText-root": {
            listStyleType: "disc",
            display: 'list-item',
        },
        "& .MuiListItemText-primary": {
            '@media(min-width:901px)': { font: 'normal normal normal 16px PoppinsRegular' },
            '@media(max-width:900px)': { font: 'normal normal normal 14px PoppinsRegular' },
        },
        paddingLeft: "1rem",
        letterSpacing: '0.77px',
        color: '#444444',
        textAlign: 'justify',
    },
    formInputFields: {
        '@media(min-width:901px)': { marginTop: "2rem" },
        '@media(max-width:900px)': { marginTop: "1rem" },
    }
});