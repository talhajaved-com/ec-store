import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const ProfilePage = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  let firstName = data.user.first_name;
  let lastName = data.user.last_name;
  let email = data.user.email;

  return (
    <ProfileContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <ProfileCard>
            <CardContent>
              <StyledAvatar src="https://i.postimg.cc/Hsmx0S3B/place-Holder.webp" />
              <Typography variant="h5">
                {firstName} {lastName}
              </Typography>
              <Typography variant="body1">Email: {email}</Typography>
              <Typography variant="body1">User Type {"Customer"}</Typography>
              <Typography variant="body1">Phone: {"+92-300-00000"}</Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" fullWidth>
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </ProfileCard>
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default ProfilePage;

const ProfileContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  "@media (max-width: 600px)": {
    padding: "1rem",
  },
});

const ProfileCard = styled(Card)({
  padding: "1.5rem",
  textAlign: "center",
  "@media (max-width: 600px)": {
    padding: "1rem",
  },
});

const StyledAvatar = styled(Avatar)({
  width: "120px",
  height: "120px",
  margin: "0 auto",
  "@media (max-width: 600px)": {
    width: "100px",
    height: "100px",
  },
});
