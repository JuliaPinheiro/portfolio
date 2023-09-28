import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Container
        sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0 0 0' }}
      >
        <img
          src='/src/assets/photo.jpeg'
          alt='Foto Julia Pinheiro'
          style={{
            width: '200px',
            height: '300px',
            borderRadius: '8px',
            marginRight: '21px',
          }}
        />

        <Typography color='white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          sapien vel bibendum bibendum, velit sapien commodo sapien, vel
          bibendum sapien sapien vel sapien. Sed euismod, sapien vel bibendum
          bibendum, velit sapien commodo sapien, vel bibendum sapien sapien vel
          sapien. Sed euismod, sapien vel bibendum bibendum, velit sapien
          commodo sapien, vel bibendum sapien sapien vel sapien. Sed euismod,
          sapien vel bibendum bibendum, velit sapien commodo sapien, vel
          bibendum sapien sapien vel sapien. Sed{' '}
        </Typography>
      </Container>
    </Container>
  );
}

export default About;
