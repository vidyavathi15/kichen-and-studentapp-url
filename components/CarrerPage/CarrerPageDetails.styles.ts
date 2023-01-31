

import { makeStyles } from "@mui/styles";


export const CarrerDetailMuiStyles = makeStyles({
    mainContainer: {
        width: "88%",
        margin: "0 auto",
        paddingTop: "4%",
        paddingBottom: "10%",
    },


    carrerDetailBgContainer: {
        background: '#FBFBFB 0% 0% no-repeat padding-box'
    }, 
    companyPositionTitle: {
        background: "#FFEBDE 0% 0% no-repeat padding-box",
        borderRadius: "9px",
        textAlign: "center",
        letterSpacing: "1.34px",
        color: "#FF9551",
        "@media(min-width:901px)": {
          font: "normal normal 22px PoppinsRegular",
          padding: "0.4rem 1rem",
        },
        "@media(max-width:900px)": {
          font: "normal normal 18px PoppinsRegular",
          padding: "0.4rem 1rem",
        },
      },


      detailJobDescriptionTitleText: {
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




    













})