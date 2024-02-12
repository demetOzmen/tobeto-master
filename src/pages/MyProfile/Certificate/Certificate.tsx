import React, {  useState,  useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import './Certificate.css';

interface UploadedFile {
  name: string;
  type: string;
  size: number;
  lastModifiedDate: string;
}

export default function Certificate() {
  // Dosya bırakıldığında çalışacak fonksiyon
  const onDrop = useCallback((acceptedFiles:any) => {
    // Dosya yükleme işlemi burada yapılacak
    const file = acceptedFiles[0];
    uploadFile(file);
  }, []);

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

   // Dosyayı listeden kaldırmak için handleDelete fonksiyonu
   const handleDelete = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // Ayrıca, dosyayı sunucudan kaldırmak için bir API çağrısı yapmanız gerekebilir.
  };

  
  // Dosya yükleme fonksiyonu
  const uploadFile = (file:any) => {
    const formData = new FormData();
    formData.append('file', file); // 'file' bu örnekte API'nizin beklediği alan adıdır.

    axios.post('YOUR_API_ENDPOINT', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      // Yüklenen dosya bilgisini state'e ekleyin
      setUploadedFiles(prevFiles => [...prevFiles, {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModifiedDate: file.lastModifiedDate.toLocaleDateString("en-US")
      }]);
    })
    .catch(error => {
      console.error('Dosya yükleme hatası: ', error);
    });
  };

  // useDropzone hook'u ile gerekli prop'ları alıyoruz
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container >
      <Row>
        <Col  md={3} sm={12}>
          <Menu />
        </Col>
        <Col md={9} sm={12}>
          <div className='dropzone-label'>Sertifikalarım</div>
          <div {...getRootProps()} className='dropzone'>
          <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Dosyaları buraya sürükleyip bırakın...</p> :
                <p>Dosya yüklemek için tıklayın veya dosyaları buraya sürükleyin.</p>
            }
          </div>
          <Table className='drz-table' striped bordered hover>
            <thead>
              <tr>
                <th>Dosya Adı</th>
                <th>Türü</th>
                <th>Tarih</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.type}</td>
                  <td>{file.lastModifiedDate}</td>
                  <td>
                    {/* İşlem butonları burada olabilir, örneğin silme butonu */}
                    <Button variant="danger" onClick={() => handleDelete(index)}>Sil</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Burada başka içerikler olabilir */}
        </Col>
      </Row>
    </Container>
  );
};
