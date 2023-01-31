import { makeStyles } from "@mui/styles";

export const BlogStyles = makeStyles({
    blogContainer: {
        "@media(max-width:900px)": { background: "#FFFFFF 0% 0% no-repeat padding-box", },
        "@media(min-width:901px)": { background: "#FBFBFB 0% 0% no-repeat padding-box", }
    },
    blogCardsGridContainer: {
        width: "88%",
        margin: "0 auto",
        paddingTop: "3%",
        paddingBottom: "8%",
        "& 	.MuiTypography-h5": {
            textAlign: "left",
            "@media(max-width:900px)": { font: "normal normal bold 22px PoppinsBold" },
            "@media(min-width:901px)": { font: "normal normal bold 36px PoppinsBold" },
            letterSpacing: "1.73px",
            color: "#040A26",
            paddingBottom: "2rem",
            cursor: "pointer"
        }
    },
    blogCardContainer: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid #D5D5D5",
        borderRadius: "8px",
        cursor: "pointer",
        "@media(max-width:900px)": { minHeight: "20rem", },
        "@media(min-width:901px)": { minHeight: "25rem", },
    },
    blogLogo: {
        "& img": {
            "@media(max-width:900px)": { maxHeight: "10.8rem" },
            "@media(min-width:901px)": { maxHeight: "13.625rem" },

            borderRadius: "8px 8px 0px 0px",
            width: "-webkit-fill-available",
        },
        "& span:first-child": {
            width: "-webkit-fill-available",
        }
    },
    blogDetailsContainer: {
        paddingLeft: "1rem",
        "& .MuiTypography-subtitle1": {
            "@media(max-width:900px)": { font: "normal normal 600 16px PoppinsSemiBold" },
            "@media(min-width:901px)": { font: "normal normal 600 22px PoppinsSemiBold" },
            letterSpacing: "1.06px",
            color: "#020B17",
        },
        "& .MuiTypography-body1": {
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular", },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular", },
            letterSpacing: "0.77px",
            color: "#444444",
        },
        "& .MuiTypography-caption": {
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular" },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular" },
            letterSpacing: "0.77px",
            color: "#A9A9AA",
        },
    },
    blogOpenContainer: {
        "& 	.MuiDivider-root": {
            borderBottom: "1px solid #D2D2D2",
            margin: "2% auto 4%"
        }
    },
    publishedByContainer: {
        marginBottom: "2rem",
        "& 	.MuiAvatar-root": {
            "@media(max-width:900px)": { width: "58px", height: "58px" },
            "@media(min-width:901px)": { width: "71px", height: "71px" },
        },
        "& .MuiTypography-caption": {
            letterSpacing: "0.77px",
            color: "#A9A9AA",
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular" },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular" },
        }
    },
    blogOpenLogo: {
        "& img": { borderRadius: "8px 8px 0px 0px", }
    },
    blogDescription: {
        "@media(max-width:900px)": { width: "90%", },
        "@media(min-width:901px)": { width: "80%", },
        margin: "0 auto",
        paddingTop: "1rem",
        "& 	.MuiTypography-body2": {
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular" },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular" },
            letterSpacing: "0.77px",
            color: "#FF9551"
        },
        "&	.MuiTypography-h6": {
            "@media(max-width:900px)": { font: "normal normal 600 18px PoppinsSemiBold" },
            "@media(min-width:901px)": { font: "normal normal 600 28px PoppinsSemiBold" },
            letterSpacing: "1.34px",
            color: "#020B17"
        },
        "&	.MuiTypography-subtitle1": {
            "@media(max-width:900px)": { font: "normal normal bold 14px PoppinsBold" },
            "@media(min-width:901px)": { font: "normal normal bold 16px PoppinsBold" },
            letterSpacing: "0.77px",
            color: "#444444"
        },
        "&	.MuiTypography-body1": {
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular" },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular" },
            letterSpacing: "0.77px",
            color: "#444444"
        },
        "& .MuiListItemText-root": {
            listStyleType: "disc",
            display: 'list-item',
        },
        "& 	.MuiListItemText-primary": {
            "@media(max-width:900px)": { font: "normal normal normal 14px PoppinsRegular" },
            "@media(min-width:901px)": { font: "normal normal normal 16px PoppinsRegular" },
            letterSpacing: "0.77px",
            color: "#444444"
        }
    },
    recentBlogUpdatesContainer: {
        background: "#FFF9F5 0% 0% no-repeat padding-box",
        border: "1px solid #DEDEDF",
        borderRadius: "4px",
        height: "75%",
        maxHeight: "100%",
        overflowY: "auto"
    },
    recentBlogUpdates: {
        width: "90%",
        margin: "0 auto",
        "& .MuiTypography-h6": {
            font: " normal normal 600 18px PoppinsSemiBold",
            letterSpacing: "0.86px",
            color: "#020B17",
            marginTop: "1rem",
            marginBottom: "1rem"
        }
    },
    recentBlogDetails: {
        "& img": { borderRadius: "7px", },
        "& .MuiTypography-subtitle1": {
            font: "normal normal 600 16px PoppinsSemiBold",
            letterSpacing: "0.86px",
            color: "#020B17"
        },
        "& .MuiTypography-subtitle2": {
            font: "normal normal normal 14px PoppinsRegular",
            letterSpacing: "0.77px",
            color: "#444444",
        },
        "& .MuiTypography-caption": {
            font: "normal normal normal 12px PoppinsRegular",
            letterSpacing: "0.67px",
            color: "#A9A9AA"
        }
    },
    socialMediaIconsContainer: {
        position: "fixed",
        top: "10rem",
        "@media(max-width:900px)": { left: "0" }
    }
})