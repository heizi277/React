import { Container, Typography, Paper } from '@mui/material';

export function Home() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Home Page
        </Typography>
        <Typography variant="body1">
          Welcome to the Home page of the React Todo App!
        </Typography>
      </Paper>
    </Container>
  );
}
