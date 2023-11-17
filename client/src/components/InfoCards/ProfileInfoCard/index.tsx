/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { Card, Divider, Tooltip, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function ProfileInfoCard({ title, description, info, social, action }: any) {
  const labels: any = [];
  const values: any = [];

  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter!, ` ${uppercaseLetter?.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label: any, key: any) => (
    <Box key={label} display="flex" py={1} pr={2}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </Typography>
    </Box>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ icon, color }: any) => (
    <Box key={color} component="a" target="_blank" rel="noreferrer" pr={1} pl={0.5} lineHeight={1}>
      {icon}
    </Box>
  ));

  return (
    <Card sx={{ height: '100%', boxShadow: 'none' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <Typography variant="h6" fontWeight="bold" textTransform="capitalize">
          {title}
        </Typography>
        <Typography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <EditIcon />
          </Tooltip>
        </Typography>
      </Box>
      <Box p={2}>
        <Box mb={2} lineHeight={1}>
          <Typography variant="button" color="text" fontWeight="light">
            {description}
          </Typography>
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          {renderItems}
          <Box display="flex" py={1} pr={2}>
            <Typography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </Typography>
            {renderSocial}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default ProfileInfoCard;
