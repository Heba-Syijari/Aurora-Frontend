import { useCallback } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

type UploadFunction = (file: File) => Promise<{ fileURL: string }>;

export function useFileDropHandler<T extends FieldValues>(
  uploadImage: UploadFunction,
  setValue: UseFormSetValue<T>,
  isLoading: boolean
) {
  const handleDrop = useCallback(
    async (acceptedFiles: File[], name: Path<T>) => {
      const file = acceptedFiles[0];

      if (file) {
        const { fileURL } = await uploadImage(file);
        if (!isLoading) setValue(name, fileURL as PathValue<T, Path<T>>, { shouldValidate: true });
      }
    },
    [uploadImage, setValue, isLoading]
  );

  return handleDrop;
}
