class RelativeSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :parent_rails_id,
              :rails_id

  extend Forwardable
  def_delegator :object, :id, :rails_id
  def_delegator :object, :full_path, :id
  def_delegator :object, :parent_id, :parent_rails_id

  embed :ids
  has_many :ancestors, embed_key: :full_path, key: :ancestor_ids
  has_one :parent, embed_key: :full_path, key: :parent_id
  has_many :siblings, embed_key: :full_path, key: :sibling_ids
  has_many :children, embed_key: :full_path, key: :kid_ids
end
