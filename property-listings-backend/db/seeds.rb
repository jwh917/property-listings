puts "🌱 Seeding spices..."

# Seed your database here
Owner.create(name: "Dale Dimmadome")


Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/1665b898-8cff-4bdf-aba1-c94210351352.jpg?im_w=960", 
  name: "Morris Cabin",
  location: "Albany, NY",
  price: 478094,
  category: "Cabin",
  bedrooms: 4,
  bathrooms: 2,
  owner_id: 1
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/4de4712a-f9a8-4883-ba40-718155ed37eb.jpg?im_w=960",
  name: "Luci's Villa",
  location: "Port Jeff, CA",
  price: 1030256,
  category: "Best Pools",
  bedrooms: 5,
  bathrooms: 3,
  owner_id: 1
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=960",
  name: "Wonder In The Woods",
  location: "Pinchot, WA",
  price: 530000,
  category: "House",
  bedrooms: 2,
  bathrooms: 1,
  owner_id: 1
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-49629092/original/affba2c4-fcf0-4c42-a01e-012a936ccb1d.jpeg?im_w=960",
  name: "Rocko's Point",
  location: "Miami, FL",
  price: 740639,
  category: "Beach/Tropical",
  bedrooms: 3,
  bathrooms: 1,
  owner_id: 1
)



# 
# 
Owner.create(name: "Rick Sanchez")
Owner.create(name: "Michael Scott")
Owner.create(name: "Peter Griffin")
# 
# WRONG
Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/3a103271-4871-450e-9538-abd39908ce89.jpg?im_w=960",
  name: "Hidden Beach",
  location: "Miami, FL",
  price: 715495,
  category: "Beach/Tropical",
  bedrooms: 1,
  bathrooms: 1,
  owner_id: 2
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/3a103271-4871-450e-9538-abd39908ce89.jpg?im_w=960",
  name: "Anna Maria Island Beachfront",
  location: "Anna Maria, FL",
  price: 1540689,
  category: "Beach/Tropical",
  bedrooms: 3,
  bathrooms: 1,
  owner_id: 3
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/c1b86a47-17c2-4bda-8c67-96954d362229.jpg?im_w=960",
  name: "Bimini House on the Beach",
  location: "Bimini, BAMA",
  price: 550458,
  category: "Beach/Tropical",
  bedrooms: 3,
  bathrooms: 3,
  owner_id: 4
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/13102e91-3a32-4cc4-96cb-40374c0556c8.jpg?im_w=960",
  name: "Hamptons Dreams",
  location: "Hampton Bays, NY",
  price: 1020050,
  category: "Best Pools",
  bedrooms: 4,
  bathrooms: 3,
  owner_id: 2
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/ee283bdf-f62d-4622-b4f7-3752fcdca0f1.jpg?im_w=960",
  name: "Guilford Cottage",
  location: "Guilford, CT",
  price: 300360,
  category: "Best Pools",
  bedrooms: 1,
  bathrooms: 1,
  owner_id: 3
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-49814528/original/8635b3ad-47a1-4be7-a2f2-97ba0ba01139.jpeg?im_w=960",
  name: "Lake Front Escape",
  location: "Branchville, NJ",
  price: 1030639,
  category: "House",
  bedrooms: 4,
  bathrooms: 3,
  owner_id: 2
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-653573886225015262/original/e19854f8-a1df-4a59-8f35-58b6e7d6f7bb.jpeg?im_w=960",
  name: "South House",
  location: "South Salem, NY",
  price: 640637,
  category: "House",
  bedrooms: 4,
  bathrooms: 2,
  owner_id: 3
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/16a8380b-cd4b-4d57-bd00-c3e4c66b313e.jpg?im_w=960",
  name: "Wallenpaupack Country Side",
  location: "Greentown, PA",
  price: 3206125,
  category: "House",
  bedrooms: 3,
  bathrooms: 1,
  owner_id: 4
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/a5b43e7f-b3d4-4ccd-aa4e-10ee091274f2.jpg?im_w=960",
  name: "Rustic Paradise",
  location: "Pine Bush, NY",
  price: 620806,
  category: "House",
  bedrooms: 3,
  bathrooms: 3,
  owner_id: 1
)

Property.create(
  propertyUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-48246558/original/bd4df2b4-57b8-41c9-97e2-6a173f14a9e9.jpeg?im_w=960",
  name: "Luxe Retreat",
  location: "Mountain Dale, NY",
  price: 795345,
  category: "House",
  bedrooms: 4,
  bathrooms: 3,
  owner_id: 1
)


puts "✅ Done seeding!"
