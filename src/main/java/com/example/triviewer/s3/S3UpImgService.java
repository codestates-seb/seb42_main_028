package com.example.triviewer.s3;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
//@Component?
@Slf4j
@Service
public class S3UpImgService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

//    @Value("${cloud.aws.s3.endpoint}")
//    private String s3EndPoint;

    private final AmazonS3 amazonS3;
//    private final S3UpImgRepository s3UpImgRepository;

    //TODO: Refactor exception, validation.
    //ObjectRequest 활용.
    public List<String> uploadImage(List<MultipartFile> multipartFile) {
        List<String> fileNameList = new ArrayList<>();

        multipartFile.forEach(file -> {
            String fileName = createFileName(file.getOriginalFilename());
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.getSize());
            objectMetadata.setContentType(file.getContentType());

            try(InputStream inputStream = file.getInputStream()) {
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
            } catch(IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 업로드 실패.");
            }

            fileNameList.add(fileName);
        });

        return fileNameList;
    }

    public void deleteImage(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

    //Make Id unique; UUID, attach (postfix) identifying value (e.g. timestamp).
    private String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
        }
    }



    //
//    public S3UpImg uploadMFile(MultipartFile multipartFile) throws IOException {
//        //Give randomUUID to make each file unique.
//        String s3ImgName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();
//
//        ObjectMetadata objMeta = new ObjectMetadata();
//        objMeta.setContentLength(multipartFile.getInputStream().available());
//
//        amazonS3.putObject(bucket + "reviews", s3ImgName, multipartFile.getInputStream(), objMeta);
//
//        S3UpImg s3UpImgs = new S3UpImg();
//        s3UpImgs.setUpImgName(s3ImgName);
//        s3UpImgs.setUpImgUrl(s3EndPoint + "/reviews/" + s3ImgName); //Route of S3 directory.
//        s3UpImgRepository.save(s3UpImgs);
//
//        log.info("File uploaded.");
//        return s3UpImgRepository.save(s3UpImgs);
//    }
}
