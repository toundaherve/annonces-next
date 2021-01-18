export default function extractAdsFromDbResults(dbAds) {
  return dbAds.map(
    ({
      id,
      category,
      title,
      description,
      price,
      contact,
      createdAt,
      updatedAt,
    }) => {
      return {
        id,
        category,
        title,
        description,
        price,
        contact,
        createdAt: createdAt.toString(),
        updatedAt: updatedAt.toString(),
      };
    }
  );
}
