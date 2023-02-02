import { DocumentContext } from "../DocumentContext";


describe('document context test Suite', () => {

    it('should able to get document context instance', () => {
      const documentContext = DocumentContext.getInstance();
      expect(documentContext).toEqual(DocumentContext.getInstance());
    });
  });