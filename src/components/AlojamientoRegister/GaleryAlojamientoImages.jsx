import React from "react";
import ReactDOM from 'react-dom'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


class FileImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        {
          source: "index.html",
          options: {
            type: "local"
          }
        }
      ]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <div className="FilesImages">
        <FilePond
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          allowReorder={true}
          maxFiles={3}
          server="/alojamiento-register"
          name="filesImages" 
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
      </div>
    );
  }
}

function GaleryAlojamientoImages({value,onChange}) {
    return (
        <FormControl id="galery" p={2}>
            <FormLabel fontSize="sm" m={1}>Guarda imagenes del alojamiento</FormLabel>
            <Input name="galery" value={value} onChange={onChange} type="file" placeholder="Galeria-imagenes" size="sm" colorScheme="blue"/>
            <FileImages></FileImages> 
        </FormControl>
    )
}

export default GaleryAlojamientoImages;