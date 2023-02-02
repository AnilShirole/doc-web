import { DocumentHttpService } from "../DocumentHttpService";
import { DocumentService } from "../DocumentService";

describe('document service test Suite', () => {

    it('should able to get document service instance', () => {
      const documentService = DocumentService.getInstance();
      expect(documentService).toEqual(DocumentService.getInstance());
    });

    // it('should get all the documents', async () => {
    //     jest.mock('../DocumentHttpService');
    //     const documentHttpService = jest.spyOn(DocumentHttpService.getInstance(), 'getAllDocuments');

    //     const documentService = DocumentService.getInstance();
    //     documentService.getAllDocuments();
    //     expect(documentHttpService).toHaveBeenCalled();
    // });
  });