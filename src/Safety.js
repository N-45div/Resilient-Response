import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import QRCode from 'qrcode.react';


const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;


const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #0B3861;
  margin-bottom: 50px;
`;

const DownloadButton = styled(Button)`
  background-color: #0B3861;
  border-color: #0B3861;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  &:hover {
    background-color: #2C3E50;
    border-color: #2C3E50;
  }
`;

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;


function QRGenerator() {
  const [qrValue, setQrValue] = useState('');

  const handleQRValueChange = (event) => {
    setQrValue(event.target.value);
  };

  const handleQRCodeDownload = () => {
    const canvas = document.getElementById('qr-code');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  return (
    <>
      <Title>TrackRelief QR code</Title>
      <GeneratorContainer>
        <Form>
          <Form.Group controlId="qrValue">
            <Form.Label>Enter QR Code Value</Form.Label>
            <Form.Control type="text" placeholder="Enter QR code value" value={qrValue} onChange={handleQRValueChange} />
          </Form.Group>
        </Form>
        <QRCodeContainer>
          <QRCode id="qr-code" value={qrValue} size={300} level={'H'} includeMargin={true} />
          <DownloadButton onClick={handleQRCodeDownload}>Download QR Code</DownloadButton>
        </QRCodeContainer>
      </GeneratorContainer>
    </>
 );
}

export default QRGenerator;

