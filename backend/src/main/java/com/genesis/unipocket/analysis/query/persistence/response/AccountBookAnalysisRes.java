package com.genesis.unipocket.analysis.query.persistence.response;

public record AccountBookAnalysisRes(
		String countryCode,
		CompareWithAverageRes compareWithAverage,
		CompareWithLastMonthRes compareWithLastMonth,
		CompareByCategoryRes compareByCategory) {}
