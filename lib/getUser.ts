'use server'
import axios from 'axios'

export type ApiUser = {
  id?: string | number
  pk?: string | number
  username?: string
  full_name?: string
  fullName?: string
  follower_count?: number
  followers?: number
  edge_followed_by?: { count?: number }
  following_count?: number
  followings?: number
  edge_follow?: { count?: number }
  media_count?: number
  posts?: number
  edge_owner_to_timeline_media?: { count?: number }
  biography?: string
  bio?: string
  external_url?: string
  website?: string
  profile_pic_url?: string
  profile_pic_url_hd?: string
  email?: string
}

export type NormalizedUser = {
  id: string | number | null
  username: string
  fullName: string
  followers: number
  following: number
  posts: number
  bio: string
  website?: string
  profilePic: string
  email?: string
}

function normalizeUser(raw: ApiUser): NormalizedUser {
  const followers =
    raw.followers ?? raw.follower_count ?? raw.edge_followed_by?.count ?? 0
  const following =
    raw.followings ?? raw.following_count ?? raw.edge_follow?.count ?? 0
  const posts =
    raw.posts ?? raw.media_count ?? raw.edge_owner_to_timeline_media?.count ?? 0

  return {
    id: raw.id ?? raw.pk ?? null,
    username: raw.username ?? '',
    fullName: raw.fullName ?? raw.full_name ?? raw.username ?? '',
    followers: Number(followers) || 0,
    following: Number(following) || 0,
    posts: Number(posts) || 0,
    bio: raw.bio ?? raw.biography ?? '',
    website: raw.website ?? raw.external_url ?? undefined,
    profilePic: raw.profile_pic_url_hd ?? raw.profile_pic_url ?? '',
    email: raw.email,
  }
}

export async function getUserByUsername(username: string): Promise<NormalizedUser> {
  const response = await axios.request<ApiUser>({
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://cph-prapi.vercel.app/v1/user/by/username?username=${encodeURIComponent(
      username
    )}`,
    headers: {
      // en prod: Authorization: `Bearer ${process.env.API_TOKEN}`
      Authorization: 'Bearer LZUPS',
    },
  })
  return normalizeUser(response.data)
}

export type SearchState = {
  user: NormalizedUser | null
  error: string | null
}

// Server Action appelée par ButtonInstagram
export async function searchInstagram(
  _prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  'use server'
  try {
    const username = String(formData.get('username') || '').trim()
    if (!username) return { user: null, error: "Entrez un nom d'utilisateur." }

    const user = await getUserByUsername(username)
    if (!user.username) return { user: null, error: 'Utilisateur introuvable.' }

    return { user, error: null }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { user: null, error: e.message }
    }
    return { user: null, error: 'Erreur lors de la recherche.' }
  }
  
}
