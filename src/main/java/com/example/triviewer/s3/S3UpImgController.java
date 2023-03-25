package com.example.triviewer.s3;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/images")
@RequiredArgsConstructor
public class S3UpImgController {
    private final S3UpImgService s3UpImgService;


    @PostMapping("/image")
    public ResponseEntity<List<String>> uploadImage(@RequestPart List<MultipartFile> multipartFile) {
        List<String> uploadedFiles = s3UpImgService.uploadImage(multipartFile);
        return new ResponseEntity<>(uploadedFiles, HttpStatus.OK);
    }


    @DeleteMapping("/image")
    public ResponseEntity<Void> deleteImage(@RequestParam String fileName) {
        s3UpImgService.deleteImage(fileName);
        return null;
    }


//    @PostMapping
//    public ResponseEntity saveFile(@RequestPart(value = "files") List<MultipartFile> multipartFiles)throws IOException {
//
//        List<S3UpImgResponseDto> imgResponse = s3UpImgService.addFile(multipartFiles);
//        return new ResponseEntity(imageResponse, HttpStatus.CREATED);
//    }
}
