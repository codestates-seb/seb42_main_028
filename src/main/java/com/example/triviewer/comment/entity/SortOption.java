package com.example.triviewer.comment.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;

import java.util.Arrays;
import java.util.Locale;

@Getter
@RequiredArgsConstructor
public enum SortOption {
    LATEST(Sort.by(Sort.Direction.DESC, "id")),
    LIKE(Sort.by(Sort.Direction.DESC, "commentLikeCount").and(Sort.by("id"))),
    OTHER(Sort.by(Sort.Direction.ASC, "id"));

    private final Sort sort;

    public static Sort getMatchedSort(String sorting) {
        return Arrays.stream(values())
                .filter(sortOption -> sortOption.name().equals(sorting.toUpperCase(Locale.ROOT)))
                .findAny()
                .orElse(OTHER)
                .sort;
    }
}
