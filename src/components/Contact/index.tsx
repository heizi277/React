import { Container, Typography, Paper, Link } from '@mui/material';

export function Contact() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Contact Page
        </Typography>
        <Typography variant="body1">
          For questions, please email:{' '}
          <Link href="mailto:contact@example.com" underline="hover">
            contact@example.com
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
