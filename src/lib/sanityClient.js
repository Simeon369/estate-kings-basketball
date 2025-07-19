// src/lib/sanityClient.js
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'cicynyzj',     // ← replace with your actual project ID
  dataset: 'production',
  apiVersion: '2025-07-19',         // use a fixed date
  useCdn: true,                     // `true` = faster, `false` = always fresh
})
