class RelativeSerializer < SimpleRelativeSerializer
  embed :ids, include: true
  has_many :ancestors, embed_key: :full_path, serializer: SimpleRelativeSerializer, key: :ancestor_ids, root: :relatives
  has_one :parent, embed_key: :full_path, serializer: SimpleRelativeSerializer, key: :parent_id, root: :relatives
  has_many :siblings, embed_key: :full_path, serializer: SimpleRelativeSerializer, key: :sibling_ids, root: :relatives
  has_many :children, embed_key: :full_path, serializer: SimpleRelativeSerializer, key: :kid_ids, root: :relatives
end
