import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const mockApiResponse = [
  { id: 1, icon: 'icon1', number : 100, text: 'Uploded files' },
  { id: 2, icon: 'icon2', number: 200, text: 'Transcribed' },
  { id: 3, icon: 'icon3', number: 300, text: 'Saved' },
];

const mockApiResponse1 = [
  { id: 1, name: 'Saydata', type: 'Audio', duration: '3 hours', dateCreated: '2023-07-25', lastUpdated: 'Table cell' },
  { id: 2, name: 'Nishant', type: 'Type B', duration: '2 hour', dateCreated: '2023-10-02', lastUpdated: '2023-10-06' },
  // Add more items as needed
];

export default function Dashboard() {
  const cardStyle = {
    margin: '8px',
    height: '150px',
  };

  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [transcriptionLanguage, setTranscriptionLanguage] = useState('english'); // Declare transcriptionLanguage state
  const [importLink, setImportLink] = useState(''); // Declare importLink state
  const [speakerIdentification, setSpeakerIdentification] = useState(false); // Declare speakerIdentification state

  useEffect(() => {
    // Simulate fetching data from the mock API
    // In a real application, you would make an actual API call here
    setData(mockApiResponse1); // Display mockApiResponse1 in the table
  }, []);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleTranscriptionLanguageChange = (event) => {
    setTranscriptionLanguage(event.target.value);
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
  };

  const handleImportLinkChange = (event) => {
    setImportLink(event.target.value);
  };

  const handleSpeakerIdentificationChange = () => {
    setSpeakerIdentification(!speakerIdentification);
  };

  const handleTranscribe = () => {
    // Handle transcription logic here
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9} style={{ margin: '0 auto', marginTop:'20px',marginLeft:'-50px', paddingRight: '25px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div>Hello User</div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
            <Button variant="contained" color="primary" onClick={handleDialogOpen}>
              Transcribe
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {mockApiResponse.map((item) => (
            <Grid key={item.id} item xs={12} sm={4}>
              <Card variant="outlined" style={cardStyle}>
                <div>
                  <div>{item.icon}</div>
                  <div>{item.number}</div>
                  <div>{item.text}</div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} style={{ marginTop: '20px' }}>
          <TableContainer component={Paper}>
            {/* Table code here */}
          </TableContainer>
        </Grid>
      </Grid>

      {/* Transcription Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} >
        <div style={{display:"flex"}}>
        <DialogTitle>Transcribe file</DialogTitle>
        <Button onClick={handleDialogClose} color="primary" marginLeft="50vw">
            X
          </Button>
          </div>
        <DialogContent>
          {/* Add transcription options here */}
          <FormControl fullWidth>
            <InputLabel id="transcription-language-label">Transcription Language</InputLabel>
            <Select
              labelId="transcription-language-label"
              id="transcription-language"
              value={transcriptionLanguage}
              onChange={handleTranscriptionLanguageChange}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              {/* Add more language options */}
            </Select>
            <br/>
          </FormControl>

          <TextField
            label="File Upload"
            type="file"
            onChange={handleFileUpload}
          />
          <TextField
            label="Import from Link"
            placeholder="Enter a link"
            value={importLink}
            onChange={handleImportLinkChange}
          />
           <br/>
          <FormGroup>
          <br/>
            <FormControlLabel
              control={
                <Switch
                  checked={speakerIdentification}
                  onChange={handleSpeakerIdentificationChange}
                  name="speaker-identification"
                />
              }
              label="Enable Speaker Identification"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleTranscribe} color="primary">
            Transcribe File
          </Button>
        </DialogActions>
      </Dialog>
       <Grid item xs={12} style={{ marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Last Updated</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.dateCreated}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell>Action Button</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
     
       </Grid>
    </Grid>
  );
}
