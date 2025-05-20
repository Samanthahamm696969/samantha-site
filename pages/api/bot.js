export default async function handler(req, res) {
  const { slug } = req.query
  const token = process.env.AIRTABLE_API_KEY
  const baseId = 'app1WLQSCgKhAGbpv'
  const tableName = 'Imported table'

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?filterByFormula=LOWER(Slug)='${slug}'`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const result = await response.json()
    const record = result.records[0]
    if (!record) return res.status(404).json(null)

    const fields = record.fields
    res.status(200).json({
      name: fields["Bot Name"],
      image: Array.isArray(fields["Preview Image"]) ? fields["Preview Image"][0].url : null,
      voice: Array.isArray(fields["Voice Clip"]) ? fields["Voice Clip"][0].url : null,
      fanvue: fields["Fanvue Link"] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch from Airtable' })
  }
}
