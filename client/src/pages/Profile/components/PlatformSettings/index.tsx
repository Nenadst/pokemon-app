import { useState } from 'react';
import { Card, Box, Typography, Switch } from '@mui/material';

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold" textTransform="capitalize">
          platform settings
        </Typography>
      </Box>
      <Box pt={1} pb={2} px={2} lineHeight={1.25}>
        <Typography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </Typography>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </Typography>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={0.5} ml={-1.5} gap={1}>
          <Box mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </Box>
          <Box width="80%" ml={0.5} textAlign="left">
            <Typography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default PlatformSettings;
