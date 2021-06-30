import React, { useState } from 'react'
import { ChakraProvider, Box } from "@chakra-ui/react";
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Register the plugin
registerPlugin(FilePondPluginImagePreview);

function FilesImages() {
  const [files, setFiles] = useState([])
  return (
    <ChakraProvider>
      <Box Box className="FilesImages">
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={6}
          name="files"
          labelIdle='Arrastra aquí las imágenes del alojamiento   <span class="filepond--label-action">(Máximo 6 imágenes)</span>'
        />
      </Box>
    </ChakraProvider>
  )
}

export default FilesImages;