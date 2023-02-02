import Axios from 'axios';
import { DocumentHttpService } from "../DocumentHttpService";

describe('document http service test Suite', () => {

    it('should able to get document http service instance', () => {
      const  documentHttpService = DocumentHttpService.getInstance();
      expect(documentHttpService).toEqual(DocumentHttpService.getInstance());
    });

    it('should get all the documents', async () => {
        const  documentHttpService = DocumentHttpService.getInstance();
        jest.mock('axios');
        const mockedAxios = Axios as jest.Mocked<typeof Axios>;
        jest.spyOn(mockedAxios, 'get');
        documentHttpService.getAllDocuments();
        expect(mockedAxios.get).toHaveBeenCalled();
    });

    it('should upload all the documents', async () => {
        const  documentHttpService = DocumentHttpService.getInstance();
        jest.mock('axios');
        const mockedAxios = Axios as jest.Mocked<typeof Axios>;
        jest.spyOn(mockedAxios, 'get');
        const documents = [{}] as File[];
        documentHttpService.uploadDocuments(documents);
        expect(mockedAxios.get).toHaveBeenCalled();
    });

    it('should download the document', async () => {
        const  documentHttpService = DocumentHttpService.getInstance();
        jest.mock('axios');
        const mockedAxios = Axios as jest.Mocked<typeof Axios>;
        jest.spyOn(mockedAxios, 'get');
        documentHttpService.downloadDocument("d0001");
        expect(mockedAxios.get).toHaveBeenCalled();
    });
  });