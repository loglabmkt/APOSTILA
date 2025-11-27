import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// FIX: Imported the 'User' type to resolve the 'Cannot find name User' error.
import { type User } from '../types';

const ProfilePage: React.FC = () => {
  const { currentUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhoto(currentUser.photoUrl);
    }
  }, [currentUser]);
  
  if (!currentUser) {
      return <div>Carregando perfil...</div>;
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    const updatedInfo: Partial<User> = { name, email };
    
    if (photo && photo !== currentUser.photoUrl) {
        updatedInfo.photoUrl = photo;
    }

    // Lógica para alterar a senha
    if (newPassword) {
      if (newPassword !== confirmNewPassword) {
        setError('As novas senhas não coincidem.');
        return;
      }
      if (currentPassword !== currentUser.password) {
        setError('A senha atual está incorreta.');
        return;
      }
      updatedInfo.password = newPassword;
    }

    updateUser(updatedInfo);
    setMessage('Perfil atualizado com sucesso!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setTimeout(() => setMessage(''), 3000); // Limpa a mensagem após 3 segundos
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-2xl mx-auto bg-brand-surface p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-brand-dark text-center mb-6">Meu Perfil</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
             <div className="w-40 h-40 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden border-4 border-brand-accent">
              {photo ? (
                <img src={photo} alt="Pré-visualização do perfil" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-500">Sem foto</span>
              )}
            </div>
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <label htmlFor="photo-upload" className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary">
              Alterar Foto
            </label>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
              required
            />
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Alterar Senha</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Senha Atual</label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Deixe em branco para não alterar"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nova Senha</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
                />
              </div>
              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirmar Nova Senha</label>
                <input
                  id="confirmNewPassword"
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
                />
              </div>
            </div>
          </div>
          
          {message && <p className="text-green-600 text-sm text-center font-semibold">{message}</p>}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-secondary hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
            >
              Salvar Alterações
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)} // Volta para a página anterior
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-colors"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;