class SimpleRelativeSerializer < ActiveModel::Serializer
  attributes  :id, :name, :rails_id

  extend Forwardable
  def_delegator :object, :id, :rails_id
  def_delegator :object, :full_path, :id
end
