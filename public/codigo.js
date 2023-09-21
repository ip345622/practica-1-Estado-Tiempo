
import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import './App.css';
import { LoadingButton } from '@mui/lab';

function App() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?name=';
  const [ci,setCi] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: ""
  });

  const [estadoActual, setEstadoActual] = useState({
    ci:"",
    name: "",
    tempc: ""
  })

  const onSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true)
    setError({
      error: true,
      message: error.message,
    });
    try {
      if(!ci.trim()) throw{ message: 'El campo ciudad es obligatorio'}
      const response = await fetch(`${url}${ci}`);
      const data = await response.json();
      if(data.error) throw {message: data.error.message};
      
      setEstadoActual({
        ci: data.location.state,
        name: data.location.name,
        tempc: data.location.tempc
      })
      
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally{
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="xs" sx={{mt:2}}>
      <Typography variant='h3' component="h1" align='center' gutterBottom >Estado del clima</Typography>
      <Box sx={{display: "grid",gap:2}} component="form" onSubmit={onSubmit}>
        <TextField
        id='ci'
        label='ciudad'
        variant='outlined'
        size='small'
        required
        value={ci}
        onChange={(e) => setCi(e.target.value)}
        error={error.error}
        helperText={error.message}
        />
        <LoadingButton type='submit' variant='contained' loading={loading} loadingIndicator='Cargando...'>
          Buscar
        </LoadingButton>
      </Box>
      <Box sx={{mt: 2, display:'grid', gap: 2, textAlign:'center'}}>
        <Typography variant='h4' component='h4'>
          {estadoActual.conditionText},{estadoActual.tempc}
        </Typography>
        <Box component='img' alt={estadoActual.conditionText} src={estadoActual.name} sx={{margin: "0 auto"}}></Box>
        <Typography variant='h5' component='h3'>
          {estadoActual.tempc}
        </Typography>
      </Box>
      <Typography textAlign="center" sx={{mt: 2, fontSize: "10px"}}>
        Api del Gobierno de México:{" "} 
        <a href='https://datos.gob.mx/blog/catalogo-apidatosgobmx' title='datos' target='_BLANK'>datos.gob.mx</a>
      </Typography>
    </Container>
  );
}

export default App;
