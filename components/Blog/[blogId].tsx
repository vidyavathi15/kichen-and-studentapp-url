import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Stack,
  Divider,
  Typography,
  Avatar,
  List,
  ListItemText,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import ForHireImg from "../../../public/Assets/for_hire.jpg";
import { BlogStyles } from "./blogStyles";
import WebLayout from "../WebLayout/webLayout.component";
import { useRouter } from "next/router";

import {
  FacebookRounded,
  InsertLinkTwoTone,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { BlogListItems } from "../../Constants/blogConstants";

function BlogDetails() {
  const Styles = BlogStyles();
  const [scrollLength, setScrollLength] = useState(0);
  const router = useRouter()
    const blogId = router.query.blogId
    

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollLength(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollLength(0));
    };
  });

  return (
    <WebLayout>
      <Box className={Styles.blogOpenContainer}>
        <Divider />
        <Box>
          <Stack
            direction={"row"}
            spacing={2}
            className={Styles.publishedByContainer}
          >
            <Stack>
              <Avatar alt="CEO" src="/Assets/CEO.png" />
            </Stack>
            <Stack direction={"column"} justifyContent={"center"} spacing={0.6}>
              <Typography variant={"caption"}>
                Published by jhon cena
              </Typography>
              <Typography variant={"caption"}>December 02, 2022</Typography>
            </Stack>
          </Stack>
        </Box>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={8.5} xl={8.5}>
            <Box>
              <Box className={Styles.blogOpenLogo}>
                <Image src={ForHireImg} alt={"ForHireImg"} height={"457px"} />
              </Box>
              {scrollLength > 700 ? (
                <Stack
                  direction={"column"}
                  spacing={1}
                  className={Styles.socialMediaIconsContainer}
                >
                  <IconButton size={"large"}>
                    <FacebookRounded fontSize="medium" />
                  </IconButton>
                  <IconButton size={"large"}>
                    <Twitter fontSize="medium" />
                  </IconButton>
                  <IconButton size={"large"}>
                    <YouTube fontSize="medium" />
                  </IconButton>
                  <IconButton size={"large"}>
                    <LinkedIn fontSize="medium" />
                  </IconButton>
                  <IconButton size={"large"}>
                    <InsertLinkTwoTone fontSize="medium" />
                  </IconButton>
                </Stack>
              ) : null}
              <Stack
                direction={"column"}
                className={Styles.blogDescription}
                spacing={4}
              >
                <Stack spacing={0.3}>
                  <Typography variant="body2">Perfect Jobs</Typography>
                  <Typography variant={"h6"}>Great Opportunities</Typography>
                </Stack>

                <Stack spacing={0.4}>
                  <Typography variant="subtitle1">Description</Typography>
                  <Typography variant="body1">About OrangeShark:</Typography>
                  <Typography variant="body1">
                    Orangeshark is a Talent Marketplace-startup that helps
                    companies build formidable teams. We help companies connect
                    with an unexplored pool of talent through our platform. With
                    50+ Funded startups and Unicorns taking our help to close
                    some of their most crucial positions, orangeshark is gaining
                    rapid traction and demand in the startup world. If you are
                    someone who is passionate about Talent
                    Acquisition/Recruitment and wish to disrupt the Hiring Space
                    through innovative ideas along with us. Apply Now to join
                    our team.
                  </Typography>
                </Stack>
                <List>
                  <Stack spacing={6}>
                    {BlogListItems.map(
                      (
                        item: { heading: string; list: string[] },
                        index: number
                      ) => (
                        <Box key={index}>
                          <Typography variant="subtitle1">
                            {item.heading}
                          </Typography>
                          {item.list.map((value: string, index: number) => (
                            <Box key={index} paddingLeft={"1.2rem"}>
                              <ListItemText primary={value} />
                            </Box>
                          ))}
                        </Box>
                      )
                    )}
                  </Stack>
                </List>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3.5} xl={3.5}>
            <Box className={Styles.recentBlogUpdatesContainer}>
              <Box className={Styles.recentBlogUpdates}>
                <Typography variant="h6">Recent Updates</Typography>
                <Stack
                  direction={"column"}
                  spacing={4}
                  className={Styles.recentBlogDetails}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                    (value: number, index: number) => (
                      <Stack key={index} direction={"row"} spacing={1}>
                        <Stack>
                          <Image
                            src={ForHireImg}
                            alt="forHire"
                            width={"105px"}
                            height={"104px"}
                          />
                        </Stack>
                        <Stack direction={"column"} spacing={0}>
                          <Typography variant="subtitle1">
                            Great Opportunities
                          </Typography>
                          <Typography variant="subtitle2">
                            Looking for great jobs and some need....
                          </Typography>
                          <Typography variant="caption">
                            December 02, 2022
                          </Typography>
                        </Stack>
                      </Stack>
                    )
                  )}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </WebLayout>
  );
}

export default BlogDetails;
