<?php
namespace App\Repository;

class RecordRepository extends PlEntityRepository
{
	/**
	 *
	 * {@inheritDoc}
	 * @see \App\Repository\PlEntityRepository::delete()
	 */
	public function delete($id) {
		
	}
	
	/**
	 *
	 * {@inheritDoc}
	 * @see \App\Repository\PlEntityRepository::save()
	 */
	public function save($id, array $data) {
		
	}
	
	/**
	 *
	 * {@inheritDoc}
	 * @see \App\Repository\PlEntityRepository::findFullOneById()
	 */
	public function findFullOneById($id) {
		
	}
	
	/**
	 * {@inheritDoc}
	 * @see \App\Repository\PlEntityRepository::findByCriteria()
	 */
	public function findByCriteria($value) {
		$query = $this->getEntityManager()->createQuery(
				'SELECT r FROM App:Record r 
       			 WHERE r.name LIKE :name'
		)->setParameter('name', '%' . $value . '%');

		return $query->getResult();
	}
}